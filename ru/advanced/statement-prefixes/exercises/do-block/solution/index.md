---
title: 'Решение: Значение блока do'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 Исходный код можно найти в файле [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Вывод

```
big
```

## Комментарии

1. Обычный `if` является оператором и не имеет пригодного для использования значения. Префикс `do` превращает всю конструкцию `if`/`else` в выражение.

1. Поскольку `7 > 5` истинно, выражение возвращает `'big'`, которое присваивается переменной `$label`. Тот же приём работает с `do given` и `do for`.

1. Фигурные скобки `{ }` обязательны. В Raku `if` всегда принимает блок, поэтому нельзя сократить ветви до `if 7 > 5 'big' else 'small'` — это не скомпилируется с ошибкой *Missing block*.

{% include nav.html %}
