---
title: Viktorīna — Smailīgie bloki
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
(-> $a, $b { $a * $b })(3, 4).say
```

{:.quiz}
1 | 12
0 | 7
0 | 34
0 | kļūda

{% include quiz.html %}

<div class="extended-explanation">

Bultiņas bloks var uzskaitīt vairākus parametrus: `-> $a, $b` ņem divus. Šeit tas vispār netiek glabāts mainīgajā — tas ir ielikts iekavās un uzreiz izsaukts ar `(3, 4)`, piesaistot `$a` vērtību `3` un `$b` vērtību `4`. Bloks tos sareizina, dodot `12`, un postfiksais `.say` to izdrukā.

</div>

{% include nav.html %}
