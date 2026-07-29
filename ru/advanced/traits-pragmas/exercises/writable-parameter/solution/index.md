---
title: 'Решение: Изменяемый параметр'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
sub double($n is rw) {
    $n *= 2;
}

my $score = 21;
double($score);
say $score;
```

🦋 Исходный код можно найти в файле [writable-parameter.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/writable-parameter.raku).

## Вывод

```
42
```

## Комментарии

1. `is rw` привязывает параметр `$n` к переменной вызывающей стороны `$score`, поэтому `$n *= 2` внутри `double` изменяет сам `$score` -- вот почему выводится `42`.

1. Без `is rw` параметр был бы доступен только для чтения, и `$n *= 2` вызвало бы ошибку компиляции. Если бы вместо этого использовался `is copy`, `double` получил бы приватную копию для изменения, а `$score` остался бы равным `21`.

{% include nav.html %}
