---
title: Тест — Нативные типы
translations_gpt:
---

{% include menu.html %}

Что напечатает следующая программа?

```raku
my int $n = 42;
say $n.^name;
```

{:.quiz}
1 | Int
0 | int
0 | (Int)
0 | Num

{% include quiz.html %}

<div class="extended-explanation">

При интроспекции нативного значения оно автоматически *упаковывается* в соответствующий полный тип. Поэтому, хотя `$n` объявлена как нативный `int`, запрос имени типа через `.^name` возвращает упакованный `Int`.

</div>

{% include nav.html %}
