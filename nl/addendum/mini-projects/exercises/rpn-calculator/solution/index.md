---
title: 'Oplossing: Een omgekeerd-Poolse rekenmachine'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Uitvoer

```
35
```

## Opmerkingen

1. Getallen worden op een stack geduwd. Een operator haalt de twee recentste waarden eraf,
combineert ze, en duwt het resultaat terug — de kern van postfix-evaluatie.

1. `do given $token` maakt van de operator de juiste rekenkunde, en de volgorde
`$a` en dan `$b` (in omgekeerde volgorde afgehaald) houdt aftrekken en delen de goede kant
op.

{% include nav.html %}
