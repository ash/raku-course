---
title: Quomodo mutsu installare
translations_gpt:
---

{% include menu.html %}

mutsu versiones paratas pro macOS et Linux, tam pro processoriis Intel/AMD quam pro ARM, in pagina emissionum repositorii sui GitHub, [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu), publicat. Quaeque versio duo programmata exsecutabilia continet: ipsum `mutsu` et `mzef`, instrumentum eius moderandi modulos.

## Cum mise

Via simplicissima emissionem installandi est [mise](https://mise.jdx.dev/), instrumentum quod instrumenta programmandi installat et renovat. Unum imperatum versionem machinae tuae aptam deprimit atque `mutsu` et `mzef` ambo in `PATH` tuum ponit:

```console
$ mise use -g github:tokuhirom/mutsu
```

## Cum Docker

In quovis systemate in quo Docker currit, Windows non excepto, mutsu uti potes eo non installato. Hoc corticem REPL interactivum incipit:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

Et hoc programma ex directoria currenti exsequitur:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Ex codice fonte aedificare

mutsu in Rust scriptus est, itaque eum etiam ipse cum Cargo ex codice fonte in repositorio eius aedificare potes; repositorium singula explicat.

## Numeri versionum

Quam versionem habeas per optionem `--version` inspice:

```console
$ mutsu --version
mutsu 0.24.0
```

Haec est emissio ipsius mutsu. Ut apud alios compilatores, versio linguae Raku res est quam ab ipsa lingua quaerere potes:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Hoc confer cum modo quo [Rakudo](/la/essentials/how-to-install-rakudo) et [Raku++](/la/essentials/how-to-install-rakupp) se ipsos nuntiant.

{% include nav.html %}
