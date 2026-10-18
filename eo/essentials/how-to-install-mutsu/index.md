---
title: Kiel instali mutsu
translations_gpt:
---

{% include menu.html %}

mutsu publikigas pretajn binaraĵojn por macOS kaj Linukso, por procesoroj kaj Intel/AMD kaj ARM, en la eldona paĝo de sia deponejo en GitHub, [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu). Ĉiu el ili enhavas du ruleblajn dosierojn: `mutsu` mem kaj `mzef`, ĝian pakaĵadministrilon.

## Per mise

La plej simpla maniero instali eldonon estas [mise](https://mise.jdx.dev/), ilo, kiu instalas kaj ĝisdatigas programistajn ilojn. Unu sola komando elŝutas la binaraĵon por via maŝino kaj metas kaj `mutsu` kaj `mzef` en vian `PATH`:

```console
$ mise use -g github:tokuhirom/mutsu
```

## Per Docker

Sur ĉiu sistemo, kiu rulas Docker, inkluzive de Vindozo, vi povas uzi mutsu sen instali ĝin. Ĉi tio lanĉas la interagan ŝelon REPL:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

Kaj ĉi tio rulas programon el la nuna dosierujo:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Konstrui el la fontkodo

mutsu estas skribita en Rust, do vi ankaŭ povas mem konstrui ĝin per Cargo el la fontkodo en ĝia deponejo; la deponejo klarigas la detalojn.

## Versiaj numeroj

Kontrolu, kiun version vi havas, per la opcio `--version`:

```console
$ mutsu --version
mutsu 0.24.0
```

Tio estas la eldono de mutsu mem. Same kiel ĉe la aliaj kompililoj, la versio de la lingvo Raku estas io, pri kio vi povas demandi la lingvon mem:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Komparu tion kun tio, kiel [Rakudo](/eo/essentials/how-to-install-rakudo) kaj [Raku++](/eo/essentials/how-to-install-rakupp) raportas sin.

{% include nav.html %}
