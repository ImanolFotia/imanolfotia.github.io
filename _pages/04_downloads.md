---
layout: page
title: Downloads
permalink: /downloads/
---

<h1>Epsilon Virtual File System </h1>

Lightweight library made for easy access to .zip files within C++.

Both Stored and compressed data is supported.

It uses Zlib Inflation/Deflation algorithms.

<h2>Usage Example</h2>

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

Available under the MIT License.

{% endhighlight %}