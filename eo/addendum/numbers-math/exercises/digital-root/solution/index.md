---
title: 'Solvo: Cifera radiko'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
```

🦋 Vi povas trovi la fontkodon en la dosiero [digital-root.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/digital-root.raku).

## Eligo

```
3
```

## Komentoj

1. `$n.comb` disigas la nombron en ĝiajn unuopajn ciferajn signojn; `[+]` adicias
ilin, nombrigante la ĉenojn aŭtomate.

1. La buklo ripetiĝas, dum la rezulto ankoraŭ havas pli ol unu ciferon, do ĝi
haltas tuj kiam `$n` falas sub `10`.

{% include nav.html %}
