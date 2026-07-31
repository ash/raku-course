---
title: Variabili dinamiche
---

{% include menu.html %}

Una variabile _dinamica_ ha il twigil `*`. A differenza di una variabile lessicale, che e' visibile solo nel blocco in cui e' dichiarata, una variabile dinamica viene trovata cercando **verso l'esterno attraverso lo stack delle chiamate** — attraverso chi ha chiamato il codice corrente, indipendentemente da dove quel codice e' definito.

```raku
my $*greeting = 'Hello';

sub greet {
    say $*greeting;
}

greet(); # Hello
```

La subroutine `greet` non dichiara `$*greeting` e non la riceve come argomento, eppure puo' vederla, perche' la variabile e' dinamica e `greet` e' stata chiamata da un punto in cui essa e' nello scope.

Questo esempio funzionerebbe anche con una semplice variabile scalare globale `$greeting`, ma la natura delle variabili dinamiche si vedra' nel prossimo esempio.

Poiche' la ricerca segue lo stack delle chiamate, una dichiarazione piu' vicina **sovrascrive** una piu' lontana per la durata del suo blocco:

```raku
my $*level = 'outer';

sub show {
    say $*level;
}

show(); # outer

{
    my $*level = 'inner';
    show(); # inner
}
```

La stessa `show` stampa `outer` la prima volta e `inner` quando viene chiamata dall'interno del blocco che ha ridichiarato `$*level`. Questo e' lo _scope dinamico_, ed e' cosi' che funzionano le variabili predefinite `$*OUT`, `$*IN` e `$*ERR` di Raku — puoi reindirizzare temporaneamente l'output ridichiarando `$*OUT` in un blocco, e ogni routine che chiami al suo interno vedra' il nuovo valore. Le variabili dinamiche sono ideali per il contesto che deve fluire nel codice chiamato senza essere passato come argomento esplicito.

{% include nav.html %}
