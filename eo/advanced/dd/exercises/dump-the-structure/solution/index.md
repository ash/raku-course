---
title: 'Solvo: Dumpi la datumstrukturon'
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 Vi povas trovi la fontkodon en la dosiero [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Eligo

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Komentoj

1. `dd @data` presas kodosimilan reprezenton de la enhavo de la tabelo. Ĝi iras al la norma erara fluo.

1. La metodo `.raku` redonas la saman reprezenton kiel ĉenon, kiu poste estas enmetita en normalan mesaĝon per koda interpolado kaj presata per `say` al la norma eligo.

1. La du linioj aspektas same ĉi tie, sed ili vojaĝas tra malsamaj eligaj fluoj: la unua venas de `dd` (norma erara fluo), la dua de `say` (norma eligo). Komparu la jenon:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
