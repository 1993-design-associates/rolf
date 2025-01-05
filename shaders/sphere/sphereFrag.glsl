    /*glsl*/
    #include <dithering_fragment>
    vec2 uv = vUv;
    float localY = (vLocalPosition.y - bboxMin.y) / (bboxMax.y - bboxMin.y);

    float outgoingLightMax = max(outgoingLight.r, max(outgoingLight.g, outgoingLight.b));
    outgoingLightMax = clamp(outgoingLightMax, 0.0, 1.0);
    vec3 viewDir = normalize(vViewPosition);
    //vec3 normal = normalize(vNormal);
    float fresnel = pow(1.0 - dot(viewDir, normal), 0.7*fresnelScale);
    float fresnelSub = pow(1.0 - dot(viewDir, normal), 1.0*fresnelScale);
    
    

    fresnelSub = pow(smoothstep(0.0, 0.9, fresnelSub), 2.0 + outgoingLightMax * 4.0); // Adjust the power as needed
    fresnel = pow(smoothstep(0.0, 0.7, fresnel), 4.0); // Adjust the power as needed
    float opacity = outgoingLightMax - fresnelSub;
    float finalFresnel = (fresnel - fresnelSub);

    // Define color stops
    ColorStop colors[4];
    colors[0] = ColorStop(0.0, colDark);
    colors[1] = ColorStop(0.4, colMid);
    colors[2] = ColorStop(0.4, colMid);
    colors[3] = ColorStop(1.0, colLight);

        // Define color stops
    ColorStop glows[4];
    glows[0] = ColorStop(1.0, colGlow);
    glows[1] = ColorStop(0.1, colLight);
    glows[2] = ColorStop(0.0001, colLight);
    glows[3] = ColorStop(0.0, colLight);

    // Define color stops
    ColorStop minColors[4];
    minColors[0] = ColorStop(0.0, colDark);
    minColors[1] = ColorStop(0.5, colMid);
    minColors[2] = ColorStop(1.0, colMid);
    minColors[3] = ColorStop(1.0, colMid);

    // Get the interpolated color
    vec3 minColor = ColorRamp(minColors, 4, outgoingLightMax);
    vec3 rampColor = ColorRamp(colors, 4, outgoingLightMax);
    vec3 glowColor = ColorRamp(glows, 3,  fresnelSub*pow(smoothstep(0.0, 0.5, outgoingLightMax), 4.0));

    minColor = mix(minColor, glowColor, fresnelSub);
    vec3 finalColor = mix(rampColor.rgb, glowColor.rgb, fresnelSub);
    finalColor = mix(finalColor, colLight, pow(smoothstep( 0.1, 1.0, finalFresnel), 1.0));
    
    float minimumOpacity = clamp(minOpacity - fresnelSub, 0.0, 1.0);
    finalColor = mix(finalColor, minColor, minimumOpacity);

    float maxOpacityClamp = clamp(maxOpacity, 0.1, 1.0);

    float distance = length(vLocalPosition);
    float fadeOut = smoothstep(maxRadius, maxRadius*1.2, distance);
    opacity = max(finalFresnel, max(opacity*maxOpacityClamp, minimumOpacity));
    opacity *= (1.0 - fadeOut);

    opacity = clamp(opacity, 0.0, 1.0);
    
    //
    //float noise = 0.0;

//    gl_FragColor = vec4(finalColor, outgoingLight.b + 0.25);

   //gl_FragColor = vec4(fresnel, fresnel, fresnel, 1.0);
   gl_FragColor = vec4(finalColor, opacity );
  //gl_FragColor = vec4(fresnelSub, fresnelSub, fresnelSub, 1.0);
  //gl_FragColor = vec4(localY, localY, localY, 1.0);
//gl_FragColor = vec4(fresnel, fresnelSub, 0.0, 1.0);
    //gl_FragColor = vec4(vLocalPosition, 1.0);
