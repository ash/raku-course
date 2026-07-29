---
title: 'Тест — Группировка'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Квадратные скобки группируют альтернативу `hello | good` без захвата, поэтому шаблон означает
«`hello` или `good`, затем `bye`». В строке `goodbye` совпадает вариант `good`, за которым идёт
`bye`, что и даёт `｢goodbye｣`.

</div>

{% include nav.html %}
