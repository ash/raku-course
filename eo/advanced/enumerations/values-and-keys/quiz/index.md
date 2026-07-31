---
title: Kvizo — Enumeraciaj valoroj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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

`.value` donas la nombron malantaŭ konstanto, sed `.key` donas ĝian *nomon* kiel ĉenon. Do `Tue.key` estas `Tue`, sendepende de la nombro `2`, kiu estis atribuita al ĝi.

</div>

{% include nav.html %}
