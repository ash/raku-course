---
title: Quiz — Il ciclo until
---

{% include menu.html %}

## 1

Cosa stampa questo programma?

```raku
my $n = 0;
until $n > 5 {
    $n++;
}
say $n;
```

{:.quiz-select}
6 | Risposta: (: 4, 5, 6 :)

## 2

Come fare in modo che questo programma abbia esattamente cinque iterazioni?

{:.quiz-code .fill}
. | my $n = 1;
6 5 | until $n == ␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n++;
. | }

{% include quiz.html %}

{% include nav.html %}