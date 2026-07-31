---
title: 'Solvo: Faru daton homlegebla'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Date {
    token TOP   { <year> '-' <month> '-' <day> }
    token year  { \d ** 4 }
    token month { \d ** 2 }
    token day   { \d ** 2 }
}

class Humanise {
    method year($/)  { make $/.Int }
    method month($/) { make <January February March April May June
                             July August September October November December>[$/ - 1] }
    method day($/)   { make $/.Int }
    method TOP($/)   { make "{$<day>.made} {$<month>.made} {$<year>.made}" }
}

say Date.parse('2026-07-05', actions => Humanise.new).made;
```

🦋 Vi povas trovi la fontkodon en la dosiero [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Eligo

```
5 July 2026
```

## Komentoj

1. Malsame ol simpla aritmetika ago, la ĵetonaj metodoj faras valorojn de **malsamaj specoj**: `year` kaj `day` faras entjerojn, sed `month` faras *ĉenon*, uzante sian numeran valoron kiel indekson en liston de monatnomoj. `$/ - 1` nombrigas la duciferan kongruon (`07` → `7`) kaj ŝovas al nul-bazita indekso, do monato `07` faras `July`.

1. La metodo `TOP` neniam reekzamenas la krudan tekston. Ĝi nur legas la tri valorojn, kiujn la submetodoj jam faris — `$<day>.made`, `$<month>.made`, `$<year>.made` — kaj interpolas ilin en la finan ĉenon. Relegi `5` el `day` ankaŭ forigas la antaŭan nulon senpage.

1. Jen la ĉiutaga laboro de agoklaso: analizi strukturitan enigon unufoje, poste lasi ĉiun metodon transformi sian propran pecon en tion, kion la resto de la programo bezonas.

{% include nav.html %}
