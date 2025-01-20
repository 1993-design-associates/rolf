    /*glsl*/
    #include <dithering_fragment>
    vec2 uv = vUv;
    float distance = length(vLocalPosition);
 
    
    float outgoingLightMax = outgoingLight.r;
    outgoingLightMax = clamp(outgoingLightMax, 0.0, 1.0);
    outgoingLightMax = mix(outgoingLightMax, 1.0-outgoingLightMax, isSwitch);

    outgoingLightMax*= maxOpacity;
    outgoingLightMax = clamp(outgoingLightMax, 0.0, 1.0);
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - dot(viewDir, normal), 0.7*fresnelScale);
    float fresnelSub = pow(1.0 - dot(viewDir, normal), 1.5*fresnelScale);
    

 
    fresnelSub = pow(smoothstep(0.0, 0.9, fresnelSub), clamp( (outgoingLightMax*(1.0-minOpacity)) * 8.0, 4.0, 8.0)); // Adjust the power as needed
    fresnel = pow(smoothstep(0.0, 0.7, fresnel), 2.0); // Adjust the power as neede
    
    float finalFresnel = (fresnel - fresnelSub);


    // Define color stops
    ColorStop colors[4];
    colors[0] = ColorStop(0.0, colDark);
    colors[1] = ColorStop(0.4, colMid);
    colors[2] = ColorStop(0.4, colMid);
    colors[3] = ColorStop(1.0, colLight);


    // Define color stops
    ColorStop minColors[4];
    minColors[0] = ColorStop(0.0, colMid);
    minColors[1] = ColorStop(0.5, colMid);
    minColors[2] = ColorStop(1.0, colMid);
    minColors[3] = ColorStop(1.0, colMid);

    // Get the interpolated color
    vec3 minColor = ColorRamp(minColors, 4, outgoingLightMax);
    vec3 rampColor = ColorRamp(colors, 4, outgoingLightMax);


 

    vec3 glowColor = mix(colGlow, colLight, pow(smoothstep(1.0, 0.0, outgoingLightMax), 1.0));
    //minColor = mix(minColor, glowColor, fresnelSub);
    float scaleFactor = vScaleFactor;
    float maxFade = clamp(1.0*scaleFactor, 0.0, 1.0 );

    vec3 finalColor = mix(rampColor.rgb, minColor, minOpacity);
    // Add Glow
    finalColor = mix(finalColor, glowColor, fresnel);
    finalColor = mix(finalColor, colGlow, pow(fresnelSub, 0.5));
    finalColor = mix(finalColor, colMid,  vScaleFactor);
    

    float opacity = clamp(outgoingLightMax, minOpacity, 1.0);

    //
    //opacity = max(finalFresnel*maxOpacity, opacity*maxOpacity);
    opacity-= clamp((1.0-inOpacity)- fresnel, 0.0, 1.0);
     opacity-= fresnelSub;
    opacity -= maxFade;

   

    float maxOpacityClamp = clamp(maxOpacity, 0.0, 1.0);
    opacity *= maxOpacity;



    //

    

    opacity = clamp(opacity, 0.0, 1.0);

    gl_FragColor = vec4(finalColor, opacity);
    

  
    




   //gl_FragColor = vec4(fresnel, fresnel, fresnel, 1.0);
   //gl_FragColor = vec4(finalColor, opacity );
  //gl_FragColor = vec4(fresnelSub, fresnelSub, fresnelSub, 1.0);
  //gl_FragColor = vec4(localY, localY, localY, 1.0);
//gl_FragColor = vec4(fresnel, fresnelSub, 0.0, 1.0);
//gl_FragColor = vec4(0.0, maxFade, 0.0, 1.0);
//gl_FragColor = vec4(glowOut, glowOut, glowOut, 1.0);
//gl_FragColor = vec4(vScaleFactor, vScaleFactor, vScaleFactor, 1.0);