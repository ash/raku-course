---
title: 'Solvo: Nombri supren'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub countup($n) {
    return if $n < 1;
    countup($n - 1);
    say $n;
}

countup(3);
```

🦋 Vi povas trovi la fontkodon en la dosiero [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/count-up.raku).

## Eligo

```
1
2
3
```

## Komentoj

1. La baza kazo `return if $n < 1` ankoraŭ haltigas la rekursion, kiam la nombrado pasas nulon.

1. La ordo de la lastaj du linioj estas tio, kio igas ĝin nombri *supren*: ĉiu voko unue rekursias tute malsupren ĝis la baza kazo, kaj nur poste presas sian propran nombron dum la vokoj malvolviĝas. Do `1` estas presata unue kaj `$n` laste.

{% include nav.html %}
