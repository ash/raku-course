---
title: Quiz — Variables as named parameters
---

{% include menu.html %}

Here is the same function as in the previous quiz:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

You also have three variables in the program:

```raku
my $a = 1;
my $b = 2;
my $c = 3;
```

Mark all the valid ways to call the function and pass two of the three variables to it.

{:.quiz}
1 | f(a => $a, b => $b)
1 | f(a => $c, b => $c)
0 | f($a, $b) | Positional arguments are passed here instead of the named ones.
1 | f(:$a, :$b)
0 | f($:a, $:b) | Not a valid Raku syntax.
0 | f(:$b, :$c) | No named parameter `c`.
0 | f(:$a, c => $c) | No named parameter `c`.
1 | f(:$a, b => $c)
1 | f(:$a, :b($c)) | Same as above.
1 | f(:a($a), :b($c)) | Also fine, while a bit redundant.


{% include quiz.html %}

{% include nav.html %}
