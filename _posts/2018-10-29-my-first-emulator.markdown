---
layout: post
title: "My First Emulator"
date: 2018-10-29 9:58 -0300
categories: hardware emulation
---

# Venturing into Hardware Emulation

![Image](https://raw.githubusercontent.com/ImanolFotia/Chip-8-Emulator/master/captures/c1.png)

A few days ago I finally fulfilled one of my long pending projects, creating an emulator.  
It is a basic **[Chip-8](https://en.wikipedia.org/wiki/CHIP-8)** emulator, considered by many the best project to start in this field.  
Chip-8 is a very small and simple specification, it consists of 36 8-bit instructions with a recommended clock speed of 500hz. Certainly not even close to run the linux kernel, 
but powerful enough to run Space Invaders.
Being a simple project didn't make it any easier, the documentation found online is not always correct, and some of the function implementations require you to be fluent in Hex, binary and logical operations, which I'm used to use, but not at this level of complexity.
In the past, I tried starting with the **[6502 CPU](https://en.wikipedia.org/wiki/MOS_Technology_6502)**, the one used in the **[NES](https://en.wikipedia.org/wiki/Nintendo_Entertainment_System)**, but I was overwhelmed by it and eventually abandoned it.  
Anyway, Chip-8 thought me way more than I thought it would, giving me the tools to finally continue my 6502 and possibly more complex ones like the **[Z80](https://en.wikipedia.org/wiki/Zilog_Z80)** or the **[Intel 8080](https://en.wikipedia.org/wiki/Intel_8080)**.  

### A little piece of advice
After finally finishing the project in about 4 days, I wanted to remark a few things that I would've liked someone put out there to lead me in some of the issues I ran into, for that, I've created **[this file](https://gist.github.com/ImanolFotia/2dc0cdf3f65cc4abaf21ab3673f0d553)**, it contains common mistakes that I've made and seen in another people's projects. I hope you find it useful if your own emulator is acting weird, don't forget to comment about it in the bottom of the page.

### Some Screenshots

## Screenshots

**Space Invaders**
![Image](https://raw.githubusercontent.com/ImanolFotia/Chip-8-Emulator/master/captures/c3.png "Space Invaders")  

**Tetris**
![Image](https://raw.githubusercontent.com/ImanolFotia/Chip-8-Emulator/master/captures/c2.png "Tetris")  

**Maze**
![Image](https://raw.githubusercontent.com/ImanolFotia/Chip-8-Emulator/master/captures/c4.png "Maze")  

###Download

You can find the full source code **[here](http://imanolfotia.com/Chip-8-Emulator)**, including a binary release.

Thanks for reading, happy coding!
