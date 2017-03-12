---
layout: post
title:  "Hello, World?"
date:   2016-12-28 14:08:03 -0300
categories: jekyll update
---
Because starting a page with "hello world" would be too cliche, I will start this website with something more useful for us programmers, the Inverse Square Root:

{% highlight c++ %}
float Q_rsqrt( float number )
{
	long i;
	float x2, y;
	const float threehalfs = 1.5F;

	x2 = number * 0.5F;
	y  = number;
	i  = * ( long * ) &y;            // evil floating point bit level hacking
	i  = 0x5f3759df - ( i >> 1 );    // what the fuck?
	y  = * ( float * ) &i;
	y  = y * ( threehalfs - ( x2 * y * y ) );

	return y;
}
{% endhighlight %}

Credits belong to John Carmack.

From Quake 3 Arena [source code](https://github.com/id-Software/Quake-III-Arena)

