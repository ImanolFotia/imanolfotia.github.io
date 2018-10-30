---
layout: page
title: Downloads
permalink: /downloads/
---

<h2>Epsilon Virtual File System </h2>

Lightweight library made for easy access to .zip files within C++.

Both Stored and compressed data is supported.

It uses Zlib Inflation/Deflation algorithms.

<h3>Usage Example</h3>

{% highlight c++ linenos %}
#include <filesystem.h>
#include <iostream>

using namespace std;

int main(int argc, char** argv)
{
  Filesystem::Mount("container.zip");

  std::shared_ptr<File> myFile = Filesystem::Open("file.txt");
  
  char fileContent[myFile->SizeUncomp];
  
  myFile->seekg(0);
  myFile->read((char*) fileContent, myFile->SizeUncomp);

  cout << string(fileContent, myFile->SizeUncomp) << endl;
  
  Filesystem::Close(myFile);
  Filesystem::Unmount("container.zip");
  
  return 0;
}

{% endhighlight %}

Available under the MIT License.

[Source code](https://github.com/ImanolFotia/Epsilon-Virtual-File-System).

[Binaries](https://github.com/ImanolFotia/Epsilon-Virtual-File-System/blob/master/bin/Debug/VFS.zip?raw=true).

<h2>Chip-8 Emulator</h2>

{% include image.html url="https://raw.githubusercontent.com/ImanolFotia/Chip-8-Emulator/master/captures/c1.png" description="Chip-8 Logo" width=500 align="right" %}

[Source code](https://github.com/ImanolFotia/Chip-8-Emulator)

[Binaries](https://github.com/ImanolFotia/Chip-8-Emulator/releases/download/1.0/Chip8.exe)