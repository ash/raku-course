---
title: Quiz — Passaggio di argomenti
---

{% include menu.html %}

## 1

C'è una funzione con la seguente definizione:

```raku
sub f {
    say 'Function called';
}
```

Scegli le chiamate corrette di questa funzione.

{:.quiz}
1 | f;
0 | f(&apos;&apos;); | La funzione non accetta argomenti, ma qui ne viene ricevuto uno.
0 | f &apos;&apos;; | Lo stesso di sopra.
1 | f(); | Questo va bene, nessun argomento passato.
0 | f (); | Qui viene passato un argomento (una lista vuota).
0 | f(10);

## 2

C'è un'altra funzione.

```raku
sub g($x, $y) {
    say "Called g($x, $y)";
}
```

Seleziona le chiamate corrette di questa funzione.

{:.quiz}
1 | g(10, 20);
0 | g 10 20; | Nessuna virgola tra gli argomenti.
0 | g(10); | Troppi pochi argomenti: ne sono richiesti due, uno passato.
1 | g 10, 20; | Le parentesi non sono necessarie quando non è ambiguo.
0 | g(10,); | Sintassi non valida.
0 | g(,20); | Anche questa non è una sintassi valida.
0 | g(&apos;10, 20&apos;); | Passato un singolo argomento stringa.
1 | g(&apos;word&apos;, 20); | Gli argomenti possono essere di tipi diversi.
0 | g(10, 20, 30); | Troppi argomenti.
0 | g 10, 20, 30; | Anche qui: vengono passati tre argomenti.


{% include quiz.html %}

{% include nav.html %}