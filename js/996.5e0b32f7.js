"use strict";(self["webpackChunkimanolfotia_com"]=self["webpackChunkimanolfotia_com"]||[]).push([[996],{996:function(l,e,n){n.r(e),e["default"]="A few days ago I bought a new laptop and started to configure my environment for graphics development, and one of the biggest headaches that I ran into, was compiling GLEW for use in Code::Blocks, since the only pre-compiled binaries that GLEW provides are for Microsoft Visual Studio.\n\nAfter some failed attemps to compile it using the IDE, I gave up and went for the console approach.\n\nDigging on the web, I found the following script that will make your life a bit easier.\n\nJust create a .bat file, paste the following content, and Voila!\n\n{% highlight c++ lineos %}\n\ngcc -DGLEW_NO_GLU -O2 -Wall -W -Iinclude  -DGLEW_BUILD -o src/glew.o -c src/glew.c\ngcc -fno-builtin -fno-stack-protector -shared -Wl,-soname,libglew32.dll -Wl,--out-implib,lib/libglew32.dll.a \n-o lib/glew32.dll src/glew.o -L/mingw/lib -lglu32 -lopengl32 -lgdi32 -luser32 -lkernel32 -nostdlib\nar cr lib/libglew32.a src/glew.o\n\ngcc -DGLEW_NO_GLU -DGLEW_MX -O2 -Wall -W -Iinclude  -DGLEW_BUILD -o src/glew.mx.o -c src/glew.c\ngcc  -fno-builtin -fno-stack-protector -shared -Wl,-soname,libglew32mx.dll -Wl,--out-implib,lib/libglew32mx.dll.a \n-o lib/glew32mx.dll src/glew.mx.o -L/mingw/lib -lglu32 -lopengl32 -lgdi32 -luser32 -lkernel32 -nostdlib\nar cr lib/libglew32mx.a src/glew.mx.o\n\n{% endhighlight batch %} "}}]);
//# sourceMappingURL=996.5e0b32f7.js.map