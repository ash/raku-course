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

{% include quiz.html %}

{% include nav.html %}
