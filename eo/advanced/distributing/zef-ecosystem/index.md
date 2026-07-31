---
title: zef kaj la ekosistemo
translations_gpt:
---

{% include menu.html %}

`zef` estas la modula instalilo de Raku. Vi jam uzis ĝin por instali modulojn laŭ nomo; ĝi ankaŭ funkcias sur loka distribua dosierujo. De ene de distribuo vi povas testi kaj instali ĝin rekte:

```
zef test .
zef install .
```

`zef test .` rulas la dosierojn sub `t/`, kaj `zef install .` instalas la distribuon en vian Raku, tiel ke aliaj programoj povas `use` ĝin. Instali laŭ nomo — `zef install Cro` — faras la samon post unue elŝuti la distribuon el la ekosistemo.

Por **publikigi** vian propran distribuon, tiel ke aliaj povas instali ĝin laŭ nomo, vi alŝutas ĝin al la ekosistemo. La kutima ilo por tio estas `fez`:

```
fez upload
```

Tio pakas la nunan distribuon kaj submetas ĝin al la Raku-ekosistemo, post kio `zef install Maths::Simple` funkcios por iu ajn.

> Ĉi tiuj komandoj bezonas `zef`/`fez` instalitajn kaj retan aliron, kaj alŝutado bezonas ekosisteman konton.

Do la vivociklo de kunhavigita modulo estas: aranĝu ĝin kun `META6.json`, testu ĝin per `zef test`, kaj publikigu ĝin per `fez upload`. De tiam ĝi estas nur alia nomo, kiun iu ajn povas `zef install`.

{% include nav.html %}
