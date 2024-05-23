---
title: Kvizo — Rekonante listojn
---

{% include menu.html %}

Listoj povas esti konfuzaj foje. Vi devas trejni vin por distingi inter listoj kaj tabeloj.

## 1

Kion la sekva programo presas?

```raku
my @data = [
    <France Italy Germany>,
    <Canada USA Mexica>,
    <Japan China India>,
];

say @data[0].WHAT;
```

{:.quiz-select}
(Listo) | Respondo: (: (Arrayo), (Listo), (Str) :)

## 2

Kaj kion pri ĉi tiu programo?

```raku
my @data = [
    ['France', 'Italy', 'Germany'],
    ['Canada', 'USA', 'Mexica'],
    ['Japan', 'China', 'India'],
];

say @data[0].WHAT;
```

{:.quiz-select}
(Arrayo) | Respondo: (: (Arrayo), (Listo), (Str) :)


{% include quiz.html %}

{% include nav.html %}