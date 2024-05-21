---
title: Quiz — Funzioni con valori predefiniti
---

{% include menu.html %}

C'è una funzione:

```raku
sub add(Int $x, Int $y) returns Int {
    $x + $y
}
```

Verifica quali delle seguenti assegnazioni funzioneranno.

{:.quiz}
1 | my $a = add(4, 6); | Assegnare a una variabile non tipizzata funziona.
0 | my Rat $b = add(5, 6); | Un valore `Int` non può essere assegnato a una variabile di tipo `Rat`.
1 | my Int $c = add(7, 8);
0 | my Num $d = add(9, 10);
1 | my Str $e = add(9, 10).Str; | La conversione esplicita del tipo aiuta.
0 | my Str $f = add(9, 10);

{% include quiz.html %}

{% include nav.html %}