---
title: Quiz — Variabili dinamiche
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
my $*n = 1;
sub show { say $*n }

sub run {
    my $*n = 2;
    show();
}

run();
```

{:.quiz}
0 | 1
1 | 2
0 | Nothing
0 | An error

{% include quiz.html %}

<div class="extended-explanation">

`show` e' scritta al livello superiore, proprio accanto a `my $*n = 1`, ma la sua posizione e' irrilevante — una variabile dinamica viene cercata attraverso lo *stack delle chiamate*, non in base a dove si trova il codice. Qui `show` e' chiamata da `run`, che ha ridichiarato `$*n` come `2`, quindi quello e' il valore in vigore e il programma stampa `2`.

</div>

{% include nav.html %}
