---
title: 'La metodo `.Str`'
---

{% include menu.html %}

La metodo `.Str` redonas la **simplan ĉen**-formon de valoro. Ĝi estas vokita kiam ajn valoro estas uzata en *ĉenkonteksto*: de `print` kaj `put`, de la kunmeta operatoro `~`, kaj de ĉeninterpolado ene de duoblaj citiloj.

```raku
say 42.Str;    # 42
my @a = 'alpha', 'beta', 'gamma';
say @a.Str;    # alpha beta gamma
```

Rimarku, ke la tabelo revenis **sen la krampoj**, kun siaj elementoj simple kunigitaj per spacoj — tio estas la videbla diferenco de [`.gist`](../gist), kiu konservas ilin. Komparu la du flankon ĉe flanko:

```raku
my @data = 1, 2, 3;
say @data.gist; # [1 2 3]
say @data.Str;  # 1 2 3
```

Ĉar interpolado uzas `.Str`, tabelo metita ene de ĉeno estas montrata en la simpla maniero:

```raku
my @data = 10, 20, 30;
say "data: @data[]"; # data: 10 20 30
```

{% include nav.html %}
