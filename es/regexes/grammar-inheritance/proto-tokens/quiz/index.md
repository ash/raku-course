---
title: Quiz — Herencia de gramáticas
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
grammar Base {
    token TOP  { <word> }
    token word { 'cat' }
}

grammar Pet is Base {
    token word { 'dog' }
}

say Pet.parse('dog').defined;
```

{:.quiz}
1 | True
0 | False
0 | ｢cat｣
0 | ｢dog｣

{% include quiz.html %}

<div class="extended-explanation">

`Pet` hereda `TOP` de `Base` pero sobrescribe el token `word` para que empareje `dog`. Cuando `Pet` analiza `'dog'` se usa su propio `word`, así que el análisis funciona y `.defined` es `True`.

</div>

{% include nav.html %}
