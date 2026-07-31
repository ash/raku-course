---
title: 'Solvo: Komenciĝas per'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say so '3 apples' ~~ /^ \d /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [starts-with.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/starts-with.raku).

## Eligo

```
True
```

## Komentoj

1. La ankro `^` devigas la kongruon komenciĝi ĉe la komenco de la ĉeno, kaj `\d` poste postulas, ke tiu unua signo estu cifero.

1. Sen la `^`, la ŝablono ankaŭ sukcesus por cifero aperanta ie ajn poste en la ĉeno, kiel `'apples 3'`.

{% include nav.html %}
