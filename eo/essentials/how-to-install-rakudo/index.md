---
title: Kiel instali Rakudo
---

{% include menu.html %}

Por ekzekuti programon en Raku, vi devas havi kompililon instalitan. Vizitu [la retejon de Rakudo](https://rakudo.org) por elŝuti la version taŭgan por via operaciumo.

Estas du ĉefaj opcioj. Vi povas instali la kompililon mem aŭ instali Rakudo Star suito (ankaŭ literumita kiel Rakudo *). Rakudo Star inkluzivas pakaĵadministrilon kaj kelkajn utilajn modulojn.

## Fontoj

Vi povas elŝuti instalilon por via sistemo ĉe [rakudo.org/downloads](https://rakudo.org/downloads). Estas versioj por ĉiuj ĉefaj operaciumoj: Vindozo, Mac OS, kaj Linukso. Estas ankaŭ fontkodoj, kiujn vi povas kompili mem.

## Rakudo Star

Eblas ankaŭ instali la pakaĵon, Rakudo Star, per rulado de la instalilo, kiun vi ricevas ĉe [rakudo.org/star](https://rakudo.org/star). Kontrolu la versian numeron antaŭ ol instali ĝin. Vi ankaŭ povas kontroli la paĝon nomitan ‘[3rd-Party Rakudo Star Bundle Packages](https://rakudo.org/star/third-party)’ por vidi pli da opcioj.

## Docker bildoj

Rakudo Star estas disponebla kiel docker bildo. Vi povas uzi ĝin por ambaŭ rulado de programoj kaj por testado de malgrandaj skriptoj en REPL ŝelo. Trovu ĉiujn instrukciojn ĉe [github.com/Raku/docker](https://github.com/Raku/docker).

## Versiaj numeroj

La Rakudo versia numeriga sistemo formas la versian numeron kiel du-partan numeron: la jaro kaj la monato de la eldondato. Vi povas facile vidi kiel freŝa estas via kompililo. Rulu la jenan komandlinion por vidi ĝian versian numeron:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.
```

Vi povas vidi tri versiajn numerojn ĉi tie. La unua estas la versio de Rakudo mem: `v2020.10`. Poste venas la versio de la Raku lingvo: `v6.d`. La ĝisdatigoj nuntempe ricevos la sekvan literon kiel minoran versian parton, ekz., `v6.e`, ktp. Fine, ni vidas la nomon de la virtuala maŝino uzata en ĉi tiu kompililo: MoarVM versio `2020.10`.

{% include nav.html %}