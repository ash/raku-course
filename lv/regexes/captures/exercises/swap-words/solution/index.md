---
title: 'Risinājums: Vispirms uzvārds'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
if 'Grace Hopper' ~~ / (\w+) ' ' (\w+) / {
    say "$1, $0";
}
```

🦋 Atrodiet programmu failā [swap-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/swap-words.raku).

## Izvade

```
Hopper, Grace
```

## Komentāri

1. Vārds un uzvārds tiek satverti `$0` un `$1`.

1. Virknē ar dubultpēdiņām katrs tvērums interpolējas kā tā sakritušais teksts. Izdrukājot `"$1, $0"`, uzvārds nonāk pirmais, tam seko burtisks komats un atstarpe un tad vārds.

{% include nav.html %}
