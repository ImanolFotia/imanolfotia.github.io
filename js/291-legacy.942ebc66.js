"use strict";(self["webpackChunkimanolfotia_com"]=self["webpackChunkimanolfotia_com"]||[]).push([[291],{7291:function(t,n,e){e.r(n),n["default"]='\nBecause starting a page with "hello world" would be too cliche, I will start this website with something more useful for us programmers, the Inverse Square Root:\n\n```cpp\nfloat Q_rsqrt( float number )  \n{\n\tlong i;\n\tfloat x2, y;\n\tconst float threehalfs = 1.5F;\n\n\tx2 = number * 0.5F;\n\ty  = number;\n\ti  = * ( long * ) &y;            // evil floating point bit level hacking\n\ti  = 0x5f3759df - ( i >> 1 );    // what the fuck?\n\ty  = * ( float * ) &i;\n\ty  = y * ( threehalfs - ( x2 * y * y ) );\n\n\treturn y;\n}\n```\n\nCredits belong to John Carmack.\n\nFrom Quake 3 Arena [source code](https://github.com/id-Software/Quake-III-Arena)\n\n'}}]);
//# sourceMappingURL=291-legacy.942ebc66.js.map