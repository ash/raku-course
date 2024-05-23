---
title: Docker uti ad currendum Raku
---

{% include menu.html %}

Imago Rakudo Star docker adhiberi potest et ad currendum REPL concha et ad exsequendum programma ex archivo.

Ad concham incipiendam, currite sequentem praeceptum. Hoc trahere novissimam imaginem `rakudo-star` si opus est.

```console
$ docker run -it rakudo-star
```
Ad currendum programma, utere sequenti praecepto:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Adde vexillum `--rm` si vis purgare continens et removere systema fasciculorum cum continens exit. Plura mandata in pagina propositi invenies.

## Nexus externi

* [Imago Docker](https://hub.docker.com/_/rakudo-star/)
* [Raku docker projectus in GitHub](https://github.com/Raku/docker)

{% include nav.html %}