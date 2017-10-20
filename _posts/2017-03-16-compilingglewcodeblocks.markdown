---
layout: post
title: "Compiling GLEW in MinGW"
date: 2017-03-16 23:00 -0300
categories: Blog Update
---

A few days ago I bought a new laptop and started to configure my environment for graphics development, and one of the biggest headaches that I ran into, was compiling GLEW for use in Code::Blocks, since the only pre-compiled binaries that GLEW provides are for Microsoft Visual Studio.

After some failed attemps to compile it using the IDE, I gave up and went for the console approach.

Digging on the web, I found the following script that will make your life a bit easier.

Just create a .bat file, paste the following content, and Voila!

{% highlight c++ lineos %}

gcc -DGLEW_NO_GLU -O2 -Wall -W -Iinclude  -DGLEW_BUILD -o src/glew.o -c src/glew.c
gcc -fno-builtin -fno-stack-protector -shared -Wl,-soname,libglew32.dll -Wl,--out-implib,lib/libglew32.dll.a 
-o lib/glew32.dll src/glew.o -L/mingw/lib -lglu32 -lopengl32 -lgdi32 -luser32 -lkernel32 -nostdlib
ar cr lib/libglew32.a src/glew.o

gcc -DGLEW_NO_GLU -DGLEW_MX -O2 -Wall -W -Iinclude  -DGLEW_BUILD -o src/glew.mx.o -c src/glew.c
gcc  -fno-builtin -fno-stack-protector -shared -Wl,-soname,libglew32mx.dll -Wl,--out-implib,lib/libglew32mx.dll.a 
-o lib/glew32mx.dll src/glew.mx.o -L/mingw/lib -lglu32 -lopengl32 -lgdi32 -luser32 -lkernel32 -nostdlib
ar cr lib/libglew32mx.a src/glew.mx.o

{% endhighlight batch %} 