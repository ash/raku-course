---
title: Pacchetti e moduli
translations_gpt: true
---

{% include menu.html %}

La parola chiave `package` introduce un namespace. Tutto ciò che viene dichiarato al suo interno con `our` diventa parte di quel namespace e può essere raggiunto dall'esterno tramite il nome del package e il separatore `::`:

```raku
package Maths {
    our $pi = 3.14;
    our sub double($x) { $x * 2 }
}

say $Maths::pi;         # 3.14
say Maths::double(5);   # 10
```

La variabile viene raggiunta come `$Maths::pi` — il sigillo, poi il nome del package, poi il nome della variabile. Una subroutine viene chiamata come `Maths::double(...)`.

Sia `package` che `module` creano un namespace; differiscono in ciò che fanno in più. Un `module` è la scelta abituale per un'unità di codice riutilizzabile, mentre un semplice `package` è solo il namespace senza nient'altro. (Una `class`, che incontrerai nella [prossima parte](/it/oop), crea anch'essa un namespace e aggiunge il meccanismo orientato agli oggetti.)

```raku
module Greet {
    our sub hello { 'hi' }
}

say Greet::hello; # hi
```

Quindi il namespace che hai ottenuto da `module` è lo stesso meccanismo che un `package` fornisce da solo. La scelta tra i due è principalmente una questione di intento: `module` per le librerie, `package` per un namespace puro — e, una volta arrivati agli oggetti, `class` per i tipi.

{% include nav.html %}
