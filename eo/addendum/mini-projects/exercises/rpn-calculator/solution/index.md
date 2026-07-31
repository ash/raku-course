---
title: 'Solvo: Kalkulilo kun inversa pola notacio'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Eligo

```
35
```

## Komentoj

1. Nombroj estas puŝataj sur stakon. Operatoro elprenas la du plej lastajn valorojn,
kombinas ilin kaj repuŝas la rezulton — la esenco de postfiksa kalkulado.

1. `do given $token` transformas la operatoron en la ĝustan aritmetikon, kaj la ordo
`$a` poste `$b` (elprenitaj inverse) tenas subtrahon kaj divison ĝustadirektaj.

{% include nav.html %}
