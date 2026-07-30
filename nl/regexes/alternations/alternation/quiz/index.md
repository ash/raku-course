---
title: 'Quiz — Groeperen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say 'goodbye' ~~ / [ hello | good ] bye /;
```

{:.quiz}
1 | ｢goodbye｣
0 | ｢good｣
0 | ｢bye｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

De vierkante haken groeperen de alternatie `hello | good` zonder te capturen, dus betekent het patroon "`hello` of `good`, dan `bye`". In `goodbye` matcht het alternatief `good` en wordt het door `bye` gevolgd, wat `｢goodbye｣` oplevert.

</div>

{% include nav.html %}
