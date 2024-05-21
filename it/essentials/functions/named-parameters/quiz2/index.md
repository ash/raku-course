---
title: Quiz — Variabili come parametri nominati
---

{% include menu.html %}

Ecco la stessa funzione del quiz precedente:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

Hai anche tre variabili nel programma:

```raku
my $a = 1;
my $b = 2;
my $c = 3;
```

Segna tutti i modi validi per chiamare la funzione e passare due delle tre variabili ad essa.

{:.quiz}
1 | f(a => $a, b => $b)
1 | f(a => $c, b => $c)
0 | f($a, $b) | Qui vengono passati argomenti posizionali invece di quelli nominati.
1 | f(:$a, :$b)
0 | f($:a, $:b) | Sintassi Raku non valida.
0 | f(:$b, :$c) | Nessun parametro nominato `c`.
0 | f(:$a, c => $c) | Nessun parametro nominato `c`.
1 | f(:$a, b => $c)
1 | f(:$a, :b($c)) | Uguale a sopra.
1 | f(:a($a), :b($c)) | Anche questo va bene, sebbene un po' ridondante.


{% include quiz.html %}

{% include nav.html %}