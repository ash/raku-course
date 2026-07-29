---
title: 'Решение: Калкулатор с обратен полски запис'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Изход

```
35
```

## Коментари

1. Числата се слагат в стек. Операторът сваля двете най-скорошни стойности, съчетава ги и
слага резултата обратно — това е същността на постфиксното изчисляване.

1. `do given $token` превръща оператора в правилната аритметика, а редът първо `$a`, после
`$b` (свалени в обратен ред) държи изваждането и делението правилно ориентирани.

{% include nav.html %}
