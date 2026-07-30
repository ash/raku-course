---
title: Quiz — Dynamische Variablen
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

`show` ist auf der obersten Ebene geschrieben, direkt neben `my $*n = 1`, aber diese Platzierung ist irrelevant — eine dynamische Variable wird über den *Aufrufstapel* aufgelöst, nicht danach, wo der Code steht. Hier wird `show` aus `run` aufgerufen, das `$*n` als `2` neu deklariert hat, also ist das der gültige Wert und das Programm gibt `2` aus.

</div>

{% include nav.html %}
