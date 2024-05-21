---
title: Quiz — Variabili locali
---

{% include menu.html %}

## 1

Cosa stampa questo programma?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
    say $value;
}
```

{:.quiz-select}
2 | Risposta: (: 1, 2, 100, 200 :) | Viene utilizzata e stampata una variabile locale.

## 2

Cosa stampa questo programma?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
}

say $value;
```

{:.quiz-select}
100 | Risposta: (: 1, 2, 100, 200 :) | Una variabile locale viene modificata, ma viene stampata la variabile globale.

{% include quiz.html %}

{% include nav.html %}