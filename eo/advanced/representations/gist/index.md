---
title: 'La metodo `.gist`'
---

{% include menu.html %}

La metodo `.gist` redonas **homlegeblan** reprezenton de valoro — la formon, kiun vi volus *legi*. Ĝuste tion `say` (kaj `note`) presas: ili vokas `.gist` sur ĉiu argumento.

```raku
say 42.gist;     # 42
say 'Raku'.gist; # Raku
```

Por simplaj valoroj la gist estas simple la valoro mem. Por kunmetitaj datumoj, `.gist` aldonas iom da formatado por ke la strukturo restu legebla:

```raku
my @a = 'alpha', 'beta', 'gamma';
say @a.gist; # [alpha beta gamma]
```

Tipobjekto — valoro kiu reprezentas la tipon mem — estas montrata per `.gist` kiel sia nomo en krampoj, kio faciligas ĝian rekonon en la eligo:

```raku
say Int.gist; # (Int)
```

{% include nav.html %}
