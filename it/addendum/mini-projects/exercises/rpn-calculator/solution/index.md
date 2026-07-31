---
title: 'Soluzione: Una calcolatrice in notazione polacca inversa'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Output

```
35
```

## Commenti

1. I numeri vengono spinti su una pila. Un operatore estrae i due valori più recenti, li
combina e rispinge il risultato — l'essenza della valutazione postfissa.

1. `do given $token` trasforma l'operatore nell'operazione aritmetica giusta, e l'ordine
`$a` poi `$b` (estratti al contrario) tiene sottrazione e divisione nel verso corretto.

{% include nav.html %}
