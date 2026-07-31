---
title: Dump delle firme di funzione
translations_gpt:
---

{% include menu.html %}

Un `dd` senza argomenti — chiamato senza argomenti all'interno di una subroutine — stampa la firma di quella subroutine: il suo nome e la lista dei parametri, se ne ha. Esamina il seguente esempio con due subroutine:

```raku
sub f1 {
    dd
}

f1();

sub f2($x) {
    dd
}

f2(42);
```

Il programma stampa le firme anziché dei valori:

```console
sub f1()
sub f2($x)
```

Questo è particolarmente utile con le multi-funzioni, dove indica quale candidato è stato effettivamente chiamato:

```raku
multi sub g {
    dd
}

multi sub g($x) {
    dd
}

g();
g(42);
```

L'output indica la variante corrispondente ogni volta:

```console
sub g()
sub g($x)
```

{% include nav.html %}
