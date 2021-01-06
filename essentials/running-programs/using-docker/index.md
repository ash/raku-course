---
title: Using docker to run Raku
---

{% include menu.html %}

A Rakudo Star docker image can be used for both running a REPL shell and executing a program from a file.

To start the shell, run the following command. It will pull the latest `rakudo-star` image if needed.

```console
$ docker run -it rakudo-star
```
To run a program, use the following command:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Add the `--rm` flag if you want to clean up the container and remove the file system when the container exits. Find more instructions on the project page.

## External links

* [Docker image](https://hub.docker.com/_/rakudo-star/)
* [Raku docker project on GitHub](https://github.com/Raku/docker)

{% include nav.html %}
