---
title: Розв'язання вправи «Калькулятор зворотного польського запису»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Вивід

```
35
```

## Коментарі

1. Числа кладуть на стек. Оператор знімає два найсвіжіші значення, поєднує їх і
кладе результат назад — у цьому й суть постфіксного обчислення.

1. `do given $token` перетворює оператор на потрібну арифметику, а порядок
спершу `$a`, потім `$b` (знятих у зворотному порядку) тримає віднімання та
ділення правильним боком.

{% include nav.html %}
