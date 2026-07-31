---
title: Dumpi la datumstrukturon
---

{% include menu.html %}

## Problemo

Vi ricevas la sekvan nestitan datumstrukturon:

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');
```

Faru du aferojn per ĝi:

1. Presu programist-amikan elmontraĵon de `@data` per `dd`.
2. Presu la saman reprezenton kiel ĉenon, prefiksitan per la teksto `Structure: `.

## Ekzemplo

La programo presas du similajn liniojn:

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
