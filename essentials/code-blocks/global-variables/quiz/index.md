---
title: Quiz — Global variables
---

{% include menu.html %}

## 1

What does this program print?

```raku
my $value = 100;

{
    $value *= 2;
}

say $value;

{
    $value = 300;
}
```

{:.quiz-select}
200 | Answer: (: 200 :)

## 2

What does this program print?

```raku
my $visible = 'Sun';

{
    $visible = 'Moon';

    {
        $visible = 'None';
    }

    say $visible;
}
```

{:.quiz-select}
None | Answer: (: Sun, Moon, None :) | The same global variable is refered in all blocks.

{% include quiz.html %}

{% include nav.html %}
