---
title: Quiz — Lexical scope
---

{% include menu.html %}

Quid hoc programma imprimit?

```raku
my $a = 1;
my $b = 2;
{
    my $a = 3;
    $b = 4;
    my $c = 5;
}
my $c = 6;

say "$a$b$c";
```

{:.quiz-select}
146 | Output programmatis: (: 125, 126, 145, 146, 325, 326, 345, 346 :)

{% include quiz.html %}

{% include nav.html %}