# Better Reflections

A couple of years ago, I updated my blog with my implementation of screen space reflections (which you can see [here](http://imanolfotia.com/blog/update/2017/03/11/ScreenSpaceReflections.html)), at the time I used a hash function to jitter the reflection ray based on the surface's roughness. 

``` glsl
vec3 hash31(float a)
{
   vec3 p3 = fract(vec3(a) * Scale);
   p3 += dot(p3, p3.yzx+K);
   return fract((p3.xxy+p3.yzz)*p3.zyx); 
}

```

Although this made for a more realistic effect, it was distracting as it had a lot of flicker when the scene is not completely still. Today I present you my take on enhancing the effect to make it a little more pleasant to the eye.

## Denoising

After seeing Nvidia's ray tracing showcase, in which they used a AI based denoised to get rid of noisy images, I asked to myself: can't I denoise my SSR by implementing something in a simple fragment shader?
After a bit of research, I found out that a proper denoising shader would be pretty expensive, so I went for a more naive approach, applying a simple box blur to the reflection buffer when the image changes.
The result, although still jittery, was a little bit better, and when paired with a detailed normal mapped surface, the result was decent. But still, I could do better.

This box blur implementation is as simple as it gets:

``` glsl
vec4 color = vec4(0.0);
float total = 0.0;
for (float x = -4.0; x <= 4.0; x += 1.0) {
    for (float y = -4.0; y <= 4.0; y += 1.0) {
        vec4 sample0 = texture(texture0, TexCoords + vec2(x, y) / resolution);
        float weight = 1.0 - abs(dot(sample0.rgb - center.rgb, vec3(0.25)));
        weight = pow(weight, exponent);
        color += sample0 * weight;
        total += weight;
    }
}

outColor = color / total;

```

## Temporal Filter

There's much more you can do when the camera and/or objects are not moving. While researching to create my own Path Tracer, I occured to me that I could use an accumulation buffer to apply a temporal filter to the reflection buffer.
The approach is pretty simple:

Everytime the camera is still, the reflection buffer get's updated and averaged with more random reflection samples. It doesn't do this forever though, the final image for a still scene is composed of 250 samples that are taken over time.

The results are better than I expected.

{% include image.html url="media/comparison.jpg" description="Comparison with and without filter" width=900 align="center" %}

There are still problems when objects move. If they move withing the 250 frames after the filter start, it'll leave a trail or ghost image, if it moves after 250 frames, it's reflection will not update.
Even though it is a really nice looking effect, I can't recomend using it for other than taking captures of a scene.

{% include image.html url="media/reflections0.jpg" description="Comparison with and without filter" width=900 align="center" %}

{% include image.html url="media/reflections1.jpg" description="Comparison with and without filter" width=900 align="center" %}
