---
title: How to install Rakudo
---

{% include menu.html %}

To execute a program in Raku, you need to have a compiler installed. Visit [the website of Rakudo](https://rakudo.org) to download the version suitable for your operation system.

There are two main options. You can install the compiler itself, or you can install a suite called Rakudo Star (also spelt as Rakudo *). Rakudo Star includes a package manager and a few usefule modules.

## Sources

You can download an installer for your system at [rakudo.org/downloads](https://rakudo.org/downloads). There exists versions for all major operating systems: Windows, Mac OS, and Lunux. There are also source codes that you can compile yourself.

## Rakudo Star

It is also possible to install the bundle, Rakudo Star by running an installer that you get at [rakudo.org/star](https://rakudo.org/star). Check the version number before installing it. You can also check the page called [https://rakudo.org/star/third-party](https://rakudo.org/star/third-party) to see more options.

## Docker images

Rakudo Start is available as a docker image. You can use it for both running programs and for testing small scripts in a REPL shell. Find all the instructions at [github.com/Raku/docker](https://github.com/Raku/docker).

## Version numbers

Version numbering system of Rakudo forms the version number out of two parts: the year and the month of the release date. You can easily see how fresh your compiler is. Run the following command line to see its version number:

    $ raku -v
    Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
    Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
    Built on MoarVM version 2020.10.

There are three version numbers here. First is the version of Rakudo itself: `v2020.10`. Then comes the version of the Raku language: `v6.d`. Currently, the updates will get the new letter as a minory version part, e.g., `v6.e`, etc. Finally, we see the name of the virtual machine used in this compiler: it MoarVM version `2020.10`.

{% include nav.html %}
