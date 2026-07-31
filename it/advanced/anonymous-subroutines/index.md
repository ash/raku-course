---
title: Subroutine anonime
translations_gpt:
---

{% include menu.html %}

Una subroutine non deve necessariamente avere un nome. Una subroutine _anonima_ viene scritta come una normale, ma senza nome, e di solito viene memorizzata in una variabile in modo da poterla chiamare successivamente.

```raku
my $double = sub ($x) {
    $x * 2
};

say $double(5); # 10
```

La variabile `$double` contiene la subroutine, e `$double(5)` la chiama con l'argomento `5`.

## Blocchi a freccia

Raku offre una notazione piu breve per la stessa cosa: il _blocco a freccia_ (pointy block). Usa la freccia `->` per introdurre i parametri e non necessita ne della parola `sub` ne delle parentesi attorno ad essi:

```raku
my $double = -> $x {
    $x * 2
};

say $double(5); # 10
```

Questo e il modo piu comune per scrivere una piccola subroutine anonima.

## Il sigillo `&`

Se preferisci chiamare la subroutine con un nome piuttosto che attraverso una variabile `$`, dichiara la variabile con il sigillo `&`. In questo modo puoi chiamarla senza il sigillo, esattamente come una subroutine ordinaria:

```raku
my &triple = -> $x {
    $x * 3
};

say triple(4); # 12
```

## Passarla a un'altra funzione

Non e necessario memorizzare una subroutine anonima in una variabile. Poiche e semplicemente un valore, puoi passarla direttamente a una funzione che ne accetta una, come `map`, `grep` o `sort`:

```raku
say (1, 2, 3).map(-> $x { $x * 2 }); # (2 4 6)
```

Il blocco a freccia e la subroutine anonima qui, e `map` lo chiama una volta per ogni elemento. Questo, in effetti, e cio che hai fatto finora: ogni blocco `{ ... }` e `-> $x { ... }` che hai passato a `map` e `grep` e una piccola subroutine anonima, scritta direttamente dove serve invece di essere prima nominata.

{% include nav.html %}
