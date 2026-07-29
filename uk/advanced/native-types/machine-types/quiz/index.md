---
title: 'Тест — Машинні типи'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

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

Коли ви робите інтроспекцію машинного значення, воно автоматично *упаковується* у відповідний повний тип. Тож, хоча `$n` оголошено як машинний `int`, запит його імені типу через `.^name` повідомляє упакований `Int`.

</div>

{% include nav.html %}
