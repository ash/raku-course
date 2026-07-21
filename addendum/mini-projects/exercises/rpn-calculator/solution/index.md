---
title: The solution of ’A reverse-Polish calculator‘
---

{% include menu.html %}

Here is a possible solution to the task.

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

🦋 You can find the source code in the file [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Output

```
35
```

## Comments

1. Numbers are pushed onto a stack. An operator pops the two most recent values,
combines them, and pushes the result back — the essence of postfix evaluation.

1. `do given $token` turns the operator into the right arithmetic, and the order
`$a` then `$b` (popped in reverse) keeps subtraction and division the right way
round.

{% include nav.html %}
