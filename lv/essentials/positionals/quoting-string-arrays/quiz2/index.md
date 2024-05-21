---
title: Viktorīna — Sarakstu atpazīšana
---

{% include menu.html %}

Saraksti dažreiz var būt mulsinoši. Jums ir jātrenējas, lai atšķirtu sarakstus no masīviem.

## 1

Ko izdrukā šāda programma?

```raku
my @data = [
    <France Italy Germany>,
    <Canada USA Mexica>,
    <Japan China India>,
];

say @data[0].WHAT;
```

{:.quiz-select}
(Saraksts) | Atbilde: (: (Masīvs), (Saraksts), (Str) :)

## 2

Un kā ar šo programmu?

```raku
my @data = [
    ['France', 'Italy', 'Germany'],
    ['Canada', 'USA', 'Mexica'],
    ['Japan', 'China', 'India'],
];

say @data[0].WHAT;
```

{:.quiz-select}
(Masīvs) | Atbilde: (: (Masīvs), (Saraksts), (Str) :)


{% include quiz.html %}

{% include nav.html %}