    /*glsl*/
    #include <dithering_fragment>
    vec2 uv = vUv; 
    
    float outgoingLightMax = outgoingLight.r;
    outgoingLightMax = clamp(outgoingLightMax, 0.0, 1.0);
    outgoingLightMax = mix(outgoingLightMax, 1.0-outgoingLightMax, isBack);

    outgoingLightMax*= maxOpacity;
    outgoingLightMax = clamp(outgoingLightMax, 0.0, 1.0);
    vec3 viewDir = normalize(vViewPosition);
    float fresnel = pow(1.0 - dot(viewDir, normal), 0.7*fresnelScale);
    float fresnelSub = pow(1.0 - dot(viewDir, normal), 1.0 * fresnelScale);
    

 
    fresnelSub = pow(smoothstep(0.0, 0.9, fresnelSub), clamp( min(((outgoingLightMax)*(1.0-minOpacity)), 1.0-pow(vProximity, 1.0)) * 16.0, 2.0, 16.0)); // Adjust the power as needed
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
    minColors[0] = ColorStop(0.0, colDark);
    minColors[1] = ColorStop(0.5, colMid);
    minColors[2] = ColorStop(1.0, colMid);
    minColors[3] = ColorStop(1.0, colMid);

    // Get the interpolated color
    vec3 minColor = ColorRamp(minColors, 4, outgoingLightMax);
    vec3 rampColor = ColorRamp(colors, 4, outgoingLightMax);


 

    vec3 glowColor = mix(colGlow, colLight, pow(smoothstep(1.0, 0.0, outgoingLightMax), 1.0));
    //minColor = mix(minColor, glowColor, fresnelSub);
    float scaleFactor = vProximity;
    float maxFade = clamp(scaleFactor, 0.0, 1.0 );

    vec3 finalColor = mix(rampColor.rgb, minColor, minOpacity);
    // Add Glow
    finalColor = mix(finalColor, glowColor, fresnel);
    finalColor = mix(finalColor, colMid,  vProximity);
    

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
    

  
    
  //gl_FragColor = vec4(rampColor, 1.0);
  //gl_FragColor = vec4(outgoingLightMax, outgoingLightMax, outgoingLightMax, 1.0);

 //gl_FragColor = vec4(fresnelSub, fresnelSub, fresnelSub,fresnelSub);
  //gl_FragColor = vec4(fresnel, fresnel, fresnel,fresnel);
  //  gl_FragColor = vec4(outgoingLightMax, outgoingLightMax, outgoingLightMax, 1.0);
  //  /gl_FragColor = vec4(outgoingLight.r, outgoingLight.r, outgoingLight.r, 1.0);