---
title: Quiz — Grammaticas creare
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
grammar Word {
    token TOP { \w+ }
}

say Word.parse('hello world').defined;
```

{:.quiz}
0 | True
1 | False
0 | ｢hello｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`.parse` succedit solum cum grammatica **totam** catenam congruit. `\w+` `hello` congruit, sed deinde spatium et `world` supersunt, itaque introitus non plene consumitur: `.parse` `Nil` reddit et `.defined` est `False`.

</div>

{% include nav.html %}
