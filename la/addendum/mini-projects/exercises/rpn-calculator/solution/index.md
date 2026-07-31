---
title: 'Solutio: Calculator notationis Polonicae inversae'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Exitus

```
35
```

## Commentarii

1. Numeri in acervum immittuntur. Operator duos valores recentissimos eximit,
eos componit, et effectum reponit — essentia aestimationis postpositivae.

1. `do given $token` operatorem in arithmeticam rectam vertit, et ordo
`$a` deinde `$b` (ordine inverso exemptorum) subtractionem et divisionem recte
servat.

{% include nav.html %}
