---
title: 'Тест — Объект Proc'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
my $proc = run 'sh', '-c', 'exit 2', :out;
$proc.out.slurp(:close);
say $proc.exitcode;
```

{:.quiz}
0 | 0
1 | 2
0 | True
0 | ошибка

{% include quiz.html %}

<div class="extended-explanation">

`.exitcode` — это целое число, которое вернула программа; здесь оболочке было велено `exit 2`,
поэтому оно равно `2`. Исключения не возникает: неудачный `Proc` сохранён в `$proc` и исследован
через `.exitcode`, а обращение к результату считается его обработкой. (Исключение появилось бы,
только если бы неудачный `Proc` был отброшен без проверки.)

</div>

{% include nav.html %}
