---
title: Viktorīna — Lokālās mainīgās
---

{% include menu.html %}

## 1

Ko izdrukā šī programma?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
    say $value;
}
```

{:.quiz-select}
2 | Atbilde: (: 1, 2, 100, 200 :) | Tiek izmantota un izdrukāta lokālā mainīgā vērtība.

## 2

Ko izdrukā šī programma?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
}

say $value;
```

{:.quiz-select}
100 | Atbilde: (: 1, 2, 100, 200 :) | Lokālā mainīgā vērtība tiek mainīta, bet tiek izdrukāta globālā mainīgā vērtība.

{% include quiz.html %}

{% include nav.html %}