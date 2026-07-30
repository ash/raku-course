---
title: Quiz — Dynamische variabelen
---

{% include menu.html %}

Wat print het volgende programma?

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

`show` is geschreven op het bovenste niveau, direct naast `my $*n = 1`, maar die plaatsing doet er niet toe — een dynamische variabele wordt opgezocht via de *call stack*, niet op basis van waar de code staat. Hier wordt `show` aangeroepen vanuit `run`, die `$*n` opnieuw declareerde als `2`, dus dat is de geldende waarde en het programma print `2`.

</div>

{% include nav.html %}
