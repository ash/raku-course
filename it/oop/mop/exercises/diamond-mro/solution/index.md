---
title: 'Soluzione: Un rombo di classi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class A {
}

class B is A {
}

class C is A {
}

class D is B is C {
}

say D.^mro.map(*.^name);
```

🦋 Trova il programma nel file [diamond-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/diamond-mro.raku).

## Output

```
(D B C A Any Mu)
```

## Commenti

1. `D` eredita da due genitori in una volta sola — `class D is B is C` li elenca ciascuno con il proprio `is`. Questa è ereditarietà multipla, e `A`, `B`, `C`, `D` formano un *rombo*: due percorsi da `D` fino all'antenato comune `A`.

1. `.^mro` appiattisce quel rombo in un unico ordine di ricerca lineare. Viene prima `D`, poi i suoi genitori `B` e `C` nell'ordine in cui sono stati scritti, poi il comune `A` e infine `Any` e `Mu`.

1. Anche se sia `B` sia `C` portano ad `A`, il tipo `A` compare **una volta sola**, e solo dopo entrambi. È questo il senso di un ordine di risoluzione dei metodi: ogni tipo viene visitato esattamente una volta, e un genitore non viene mai prima di una figlia che ne eredita — così un metodo definito in `B` viene sempre trovato prima di quello che sovrascriverebbe in `A`.

{% include nav.html %}
