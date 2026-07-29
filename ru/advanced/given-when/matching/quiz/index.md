---
title: Тест — `when`
translations_gpt:
---

{% include menu.html %}

Что напечатает следующая программа?

```raku
given 5 {
    when $_ > 0 { say 'positive' }
    when 5      { say 'five' }
}
```

{:.quiz}
1 | positive
0 | five
0 | both lines
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

Блок `when` автоматически *выходит* из `given` после совпадения — проваливания нет. `5` удовлетворяет первому условию `$_ > 0`, поэтому печатается `positive`, а второй `when 5` никогда не выполняется, хотя он тоже совпал бы.

</div>

{% include nav.html %}
