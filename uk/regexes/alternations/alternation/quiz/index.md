---
title: 'Тест — Групування'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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

Квадратні дужки групують альтернативу `hello | good` без захоплення, тож шаблон означає «`hello` або `good`, а потім `bye`». У `goodbye` збігається альтернатива `good`, за якою йде `bye`, даючи `｢goodbye｣`.

</div>

{% include nav.html %}
