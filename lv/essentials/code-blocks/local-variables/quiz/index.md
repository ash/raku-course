---
title: Viktorīna — vietējie mainīgie
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


## 3

Šī programma izskatās gandrīz tāpat, taču blokā nav `my`. Ko tā izdrukā?

```raku
my $value = 100;

{
    $value *= 2;
}

say $value;
```

{:.quiz-select}
200 | Atbilde: (: 1, 2, 100, 200 :) | Bez `my` blokam nav sava lokālā mainīgā, tāpēc tas maina to pašu globālo mainīgo.

{% include quiz.html %}

{% include nav.html %}