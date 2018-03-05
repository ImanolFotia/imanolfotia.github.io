---
layout: post
title: "Epsilon Engine Deep Analysis"
date: 2018-3-4 9:58 -0300
categories: Blog Update
---

This Post is not yet completed

<h2>Setting Up the G-buffer</h2>
Epsilon Engine uses a deferred renderer, this means that instead of calculating the lighting for each pixel, the different properties of the objects(Normals, Position, etc.) are stores in several render targets, this is called a geometry buffer (G-Buffer).
Epsilon Engine utilizes a hybrid deferred-forward renderer, this allows the usage of transparency and other effects and optimizations. 

{% include image.html url="/media/gbuffer.png" description="" width=720 align="center" %}
<h2>Ambient Capture</h2>

<h2>Geometry Pass</h2>

<h2>Screen Space Ambient Oclussion</h2>
Screen Space Ambient Occlusion darkens areas where ambient lighting does not reach, this can ber holes or concave corners. Epsilon Engine has two options for this effect, a the original Crytek's SSAO algorithm, with cone-trancing instead of sphere tracing, and Nvidia's Horizon Based Ambient Occlusion.
<h2>Lighting Pass</h2>

<h2>Reflections</h2>
Epsilon Engine makes extensive use of both static and dynamic reflections. For the first, various cubemaps are sparced around the world, these cubemaps are then processed into two branches; for diffuse IBL, 3rd order Spherical Harmonics are calculated, the other branch uses a Quasi-Montecarlo shader to acchieve different levels of roughness, each then stored in different mipmap levels and fetched per object during runtime. These fetches are performed making use of the Cubemap Parallax Projection technique.
For dynamic reflections, Screen Space Reflections (SSR) are used, these are calculated per pixel in a different shader at 1/3 resolution. When Screen Space information is not enough, reflection from the pre-filtered cubemap is used.
For more information about how SSR is performed, check out [This article](http://imanolfotia.com/blog/update/2017/03/11/ScreenSpaceReflections.html).
<h2>Post-Process</h2>
During the last phase of the pipeline, several post-processing effects are used, most of them are:
<h3>Lens Flare</h3>
Dynamic lens flares are generated from a brightness buffer, both the intensity of the effect and the number of flares are easily twekeable.
The flares are then blurred to avoid artifacts.
<h3>God Rays</h3>
For light scattering or "God Rays", a weighted radial blur shader is used.
The effect only used 10 texture taps, but this are done using a hashing algorithm to randomize the sampling, thus making the effect cheaper with the tradeof of noise.
<h3>Bokeh Depth of Field</h3>
For Bokeh, a disk blur is used to calculate a real life camera's Circle of Confusion (CoC). 64 texture taps are performed, combining performance and visual quality. The size of the CoC is determined using the depth buffer, with both near and far fields calculated in one pass
<h3>High Dynamic Range(HDR)</h3>


