---
title: Tesserae proto et alternativae
translations_gpt:
---

{% include menu.html %}

Interdum unus conceptus plures formas habet — numerus integer vel decimalis esse potest. Alternationem per `|` scribere posses, sed grammaticae mundiorem modum offerunt: _tesseram proto_ cum variantibus nominatis.

Declara tesseram umbraculi ut `proto token`, deinde scribe unamquamque variantem ut `token nomen:sym<titulus>`:

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<int>   { \d+ }
    token number:sym<float> { \d+ '.' \d+ }
}

say Number.parse('42').defined;   # True
say Number.parse('3.14').defined; # True
```

Linea `proto token number {*}` dicit «`number` est una ex variantibus infra». Unaquaeque variantis titulum `:sym<…>` fert qui eam nominat. Cum grammatica `<number>` eget, variantes temptat et, congruentia longissimae tesserae, eam eligit quae congruit — `int` pro `42`, `float` pro `3.14`.

Tesserae proto melius leguntur quam longa catena alternativarum `|`, et tituli `:sym<…>` unicuique casui nomen dant in quo postea agere potes cum analysi significationem adfigis. Sunt modus proprius exprimendi «unum ex his generibus» in grammatica.

{% include nav.html %}
