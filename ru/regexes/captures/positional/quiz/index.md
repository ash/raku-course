---
title: 'Тест — Позиционные захваты'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
if 'ab-cd' ~~ / (\w+) '-' (\w+) / {
    say $1;
}
```

{:.quiz}
0 | ｢ab｣
1 | ｢cd｣
0 | ｢ab-cd｣
0 | ｢-｣

{% include quiz.html %}

<div class="extended-explanation">

Две пары скобок захватывают в `$0` и `$1`, нумерация идёт с нуля. Первая захватывает `ab`,
вторая — `cd`, поэтому `$1` равно `｢cd｣`.

</div>

{% include nav.html %}
