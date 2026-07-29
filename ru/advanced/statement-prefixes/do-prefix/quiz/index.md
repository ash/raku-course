---
title: Тест — do
translations_gpt:
---

{% include menu.html %}

Что напечатает следующая программа?

```raku
my $s = do given -3 {
    when $_ < 0 { 'neg' }
    default     { 'nonneg' }
};
say $s;
```

{:.quiz}
1 | neg
0 | nonneg
0 | -3
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`do` работает перед управляющими конструкциями, а не только перед обычными блоками. Здесь `do given` превращает всю конструкцию `given`/`when` в выражение. Топик `-3` соответствует условию `$_ < 0`, поэтому выражение возвращает `'neg'`, которое сохраняется в `$s`.

</div>

{% include nav.html %}
