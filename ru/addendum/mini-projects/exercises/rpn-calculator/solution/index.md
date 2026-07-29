---
title: 'Решение: Калькулятор обратной польской записи'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $expression = '3 4 + 5 *';
my @stack;

for $expression.words -> $token {
    if $token ~~ / ^ \d+ $ / {
        @stack.push($token.Int);
    }
    else {
        my $b = @stack.pop;
        my $a = @stack.pop;
        @stack.push( do given $token {
            when '+' { $a + $b }
            when '-' { $a - $b }
            when '*' { $a * $b }
            when '/' { $a / $b }
        });
    }
}

say @stack[0];
```

🦋 Исходный код можно найти в файле [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Вывод

```
35
```

## Комментарии

1. Числа кладутся на стек. Оператор снимает два последних значения, объединяет их и кладёт
результат обратно — в этом и состоит суть постфиксного вычисления.

1. `do given $token` превращает оператор в нужное арифметическое действие, а порядок сперва `$a`,
затем `$b` (снятые в обратном порядке) сохраняет правильное направление вычитания и деления.

{% include nav.html %}
