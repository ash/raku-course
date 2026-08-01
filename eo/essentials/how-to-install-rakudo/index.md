---
title: Kiel instali Rakudo
translations_gpt:
---

{% include menu.html %}

Por ruli programon en Raku, vi bezonas instalitan kompililon. Ĉi tiu kurso uzas Rakudo; la alia kompililo, [Raku++](/eo/essentials/the-rakupp-compiler), estas instalata [aparte](/eo/essentials/how-to-install-rakupp). Vizitu [la retejon de Rakudo](https://rakudo.org) por elŝuti la version taŭgan por via mastruma sistemo.

## Fontoj

Vi povas elŝuti instalilon por via sistemo ĉe [rakudo.org/downloads](https://rakudo.org/downloads). Ekzistas versioj por ĉiuj ĉefaj mastrumaj sistemoj: Windows, Mac OS kaj Linux. Ekzistas ankaŭ la fontkodoj, kiujn vi povas mem kompili.

## Docker-bildoj

Rakudo disponeblas ankaŭ kiel docker-bildo. Vi povas uzi ĝin kaj por ruli programojn kaj por elprovi malgrandajn skriptojn en ŝelo REPL. Ĉiujn instrukciojn vi trovos ĉe [github.com/Raku/docker](https://github.com/Raku/docker).

## Versinumeroj

La sistemo de versinumerado de Rakudo formas la versinumeron el du partoj: la jaro kaj la monato de la eldondato. Tiel vi facile vidas, kiom freŝa estas via kompililo. Plenumu la jenan komandlinion por vidi ĝian versinumeron:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2026.06.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2026.06.
```

Ĉi tie vi vidas tri versinumerojn. La unua estas la versio de Rakudo mem: `v2026.06`. Poste venas la versio de la lingvo Raku: `v6.d`. La ĝisdatigoj nuntempe ricevas la sekvan literon kiel malĉefan parton de la versio, ekzemple `v6.e` kaj tiel plu. Fine ni vidas la nomon de la virtuala maŝino uzata de ĉi tiu kompililo: MoarVM versio `2026.06`.

{% include nav.html %}
