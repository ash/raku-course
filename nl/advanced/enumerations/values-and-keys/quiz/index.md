---
title: Quiz — Enumwaarden
translations_gpt: Dutch
---

{% include menu.html %}

Wat print het volgende programma?

```raku
enum Day (Mon => 1, Tue => 2);
say Tue.key;
```

{:.quiz}
1 | Tue
0 | 2
0 | 1
0 | Mon

{% include quiz.html %}

<div class="extended-explanation">

`.value` geeft het getal achter een constante, maar `.key` geeft de *naam* als een tekenreeks. Dus `Tue.key` is `Tue`, ongeacht het getal `2` dat eraan is toegekend.

</div>

{% include nav.html %}
