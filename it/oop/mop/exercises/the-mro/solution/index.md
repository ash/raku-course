---
title: "Soluzione: L'ordine di risoluzione dei metodi"
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

class C is B {
}

say C.^mro.map(*.^name);
```

🦋 Trova il programma nel file [the-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/the-mro.raku).

## Output

```
(C B A Any Mu)
```

## Commenti

1. `.^mro` restituisce la catena di tipi che Raku percorre quando risolve un metodo.

1. La catena segue la linea di ereditarietà un passo alla volta: `C`, poi il suo genitore `B`, poi il genitore di `B` cioè `A`, e infine `Any` e `Mu`, con cui ogni tipo termina. Una gerarchia più profonda allunga semplicemente l'elenco.

{% include nav.html %}
