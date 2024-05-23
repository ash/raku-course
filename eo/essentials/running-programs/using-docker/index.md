---
title: Uzante docker por funkciigi Raku
---

{% include menu.html %}

Docker-bildo de Rakudo Star povas esti uzata por ambaŭ funkciigi REPL-ŝelon kaj ekzekuti programon el dosiero.

Por starti la ŝelon, rulu la jenan komandon. Ĝi elŝutos la plej lastan bildon de `rakudo-star` se necese.

```console
$ docker run -it rakudo-star
```
Por funkciigi programon, uzu la jenan komandon:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Aldonu la flagon `--rm` se vi volas purigi la ujon kaj forigi la dosiersistemon kiam la ujo eliras. Trovu pli da instrukcioj sur la projekto-paĝo.

## Eksteraj ligiloj

* [Docker-bildo](https://hub.docker.com/_/rakudo-star/)
* [Raku docker-projekto en GitHub](https://github.com/Raku/docker)

{% include nav.html %}