---
title: 'Тест — Якоря'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
say so 'I have a dog' ~~ /<< dog >>/;
```

{:.quiz}
1 | True
0 | False
0 | ｢dog｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Шаблон требует, чтобы `dog` было целым словом. В строке `I have a dog` слово `dog` стоит
особняком: перед ним пробел, а за ним конец строки, — значит, с обеих сторон есть граница слова,
сопоставление удаётся и `so` возвращает `True`.

</div>

{% include nav.html %}
