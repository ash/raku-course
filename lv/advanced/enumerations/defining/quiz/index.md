---
title: Viktorīna — Uzskaitījumi
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
enum Colour <red green blue>;
say green + blue;
```

{:.quiz}
1 | 3
0 | greenblue
0 | (green blue)
0 | kļūda

{% include quiz.html %}

<div class="extended-explanation">

Katra konstante apzīmē skaitli, kas piešķirts no nulles uzskaitīšanas secībā: `red` ir `0`, `green` ir `1`, `blue` ir `2`. Aritmētiskā kontekstā konstantes uzvedas kā šie skaitļi, tāpēc `green + blue` ir `1 + 2`, kas ir `3`.

</div>

{% include nav.html %}
