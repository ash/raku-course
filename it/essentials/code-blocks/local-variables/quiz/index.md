---
title: Quiz — Variabili locali
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

## 3

Questo programma è quasi identico, ma nel blocco non c'è `my`. Cosa stampa?

```raku
my $value = 100;

{
    $value *= 2;
}

say $value;
```

{:.quiz-select}
200 | Risposta: (: 1, 2, 100, 200 :) | Senza `my` il blocco non ha una variabile locale e quindi modifica la stessa variabile globale.

{% include quiz.html %}

{% include nav.html %}