---
title: Viktorīna — Globālās mainīgās
---

{% include menu.html %}

## 1

Ko izdrukā šī programma?

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
200 | Atbilde: (: 200 :)

## 2

Ko izdrukā šī programma?

```raku
my $visible = 'Saule';

{
    $visible = 'Mēness';

    {
        $visible = 'Neviens';
    }

    say $visible;
}
```

{:.quiz-select}
Neviens | Atbilde: (: Saule, Mēness, Neviens :) | Visi bloki atsaucas uz to pašu globālo mainīgo.

{% include quiz.html %}

{% include nav.html %}