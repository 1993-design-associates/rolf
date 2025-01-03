    /*glsl*/
    #include <dithering_fragment>
    vec2 uv = vUv;

    //gradient from edge
    vec2 uvn=  abs(uv -0.5)*2.0;
    vec2 distV     = uvn;
    float maxDist  = max(abs(distV.x), abs(distV.y));
    float circular = length(distV);
    float square   = maxDist;
    float mix = mix(circular,square,maxDist);
    //mix = smoothstep(0.1, 1.0, mix);
    //


    //
    //float noise = 0.0;

    gl_FragColor = vec4(outgoingLight.r, outgoingLight.g, outgoingLight.b, outgoingLight.b +0.25);
