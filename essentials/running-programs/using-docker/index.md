---
title: Using docker to run Raku
---

{% include menu.html %}

A Rakudo Star docker image can be used for running both a REPL or to execute a program from a file.

To start a REPL, run the following command. It will pill the latest `rakudo-star` image if needed.

    $ docker run -it rakudo-star

To run a program using [a docker image](https://hub.docker.com/_/rakudo-star/), use the following command:

    $ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku

Add the `--rm` flag if you want to clean up the container and remove the file system when the container exits. Find more instructions on the [project page](https://github.com/Raku/docker).

{% include nav.html %}
