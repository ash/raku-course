---
title: Quiz — Local variables
---

{% include menu.html %}

## 1

What does this program print?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
    say $value;
}
```

{:.quiz-select}
2 | Answer: (: 1, 2, 100, 200 :) | A local variable is used and printed.

## 2

What does this program print?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
}

say $value;
```

{:.quiz-select}
100 | Answer: (: 1, 2, 100, 200 :) | A local variable is modified, but the global variable is printed.


## 3

This program looks almost the same, but there is no `my` inside the block. What does it print?

```raku
my $value = 100;

{
    $value *= 2;
}

say $value;
```

{:.quiz-select}
200 | Answer: (: 1, 2, 100, 200 :) | Without `my`, the block has no local variable, so it modifies the same global one.

{% include quiz.html %}

{% include nav.html %}
