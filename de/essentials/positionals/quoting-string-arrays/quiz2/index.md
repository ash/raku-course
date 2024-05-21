---
title: Quiz — Erkennen von Listen
---

{% include menu.html %}

Listen können manchmal verwirrend sein. Man muss sich darin üben, zwischen Listen und Arrays zu unterscheiden.

## 1

Was gibt das folgende Programm aus?

```raku
my @data = [
    <Frankreich Italien Deutschland>,
    <Kanada USA Mexiko>,
    <Japan China Indien>,
];

say @data[0].WHAT;
```

{:.quiz-select}
(Liste) | Antwort: (: (Array), (Liste), (Str) :)

## 2

Und was ist mit diesem Programm?

```raku
my @data = [
    ['Frankreich', 'Italien', 'Deutschland'],
    ['Kanada', 'USA', 'Mexiko'],
    ['Japan', 'China', 'Indien'],
];

say @data[0].WHAT;
```

{:.quiz-select}
(Array) | Antwort: (: (Array), (Liste), (Str) :)


{% include quiz.html %}

{% include nav.html %}