---
title: Docker izmantošana Raku palaišanai
---

{% include menu.html %}

Rakudo Star docker attēlu var izmantot gan REPL čaulas palaišanai, gan programmas izpildei no faila.

Lai sāktu čaulu, palaidiet šādu komandu. Tā nepieciešamības gadījumā lejupielādēs jaunāko `rakudo-star` attēlu.

```console
$ docker run -it rakudo-star
```
Lai palaistu programmu, izmantojiet šādu komandu:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Pievienojiet `--rm` karogu, ja vēlaties iztīrīt konteineru un noņemt failu sistēmu, kad konteineris beidz darbu. Vairāk instrukciju atradīsiet projekta lapā.

## Ārējās saites

* [Docker attēls](https://hub.docker.com/_/rakudo-star/)
* [Raku docker projekts GitHub](https://github.com/Raku/docker)

{% include nav.html %}