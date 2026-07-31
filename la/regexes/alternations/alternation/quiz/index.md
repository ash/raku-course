---
title: Quiz — Gregatio
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Unci quadrati alternationem `hello | good` sine captura gregant, itaque exemplar significat «`hello` vel `good`, deinde `bye`». In `goodbye` alternativa `good` congruit et `bye` eam sequitur, dans `｢goodbye｣`.

</div>

{% include nav.html %}
