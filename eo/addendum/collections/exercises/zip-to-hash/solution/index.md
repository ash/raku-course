---
title: 'Solvo: Kunigu du listojn en haketmapon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @names  = <Anna Bob Cara>;
my @scores = 90, 85, 95;

my %result = @names Z=> @scores;

for %result.sort -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [zip-to-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/zip-to-hash.raku).

## Eligo

```
Anna: 90
Bob: 85
Cara: 95
```

## Komentoj

1. `Z=>` estas la zipa metaoperatoro aplikita al la para konstruilo `=>`: ĝi trairas
ambaŭ listojn samritme kaj konstruas paron `nomo => poento` el ĉiu pozicio.

1. Atribui tiun liston de paroj al variablo `%` faras haketmapon, kiu poste estas
presata en ŝlosila ordo.

{% include nav.html %}
