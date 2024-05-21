---
title: Funzioni MAIN multiple
---

{% include menu.html %}

Come qualsiasi altra funzione in Raku, la funzione `MAIN` può avere le sue varianti `multi`. Ciò consente al programma di reagire individualmente a un diverso numero o a diversi tipi di parametri di input.

```raku
multi sub MAIN($a) {
    say 2 * $a;
}

multi sub MAIN($a, $b) {
    say $a + $b;
}
```

Questo programma raddoppia il suo unico argomento o lo somma al secondo argomento se è presente:

```console
$ raku t.raku 21
42

$ raku t.raku 21 33
54
```

{% include nav.html %}