---
title: Appiattimento e itemizzazione
translations_gpt:
---

{% include menu.html %}

Quando metti un array dentro un altro, Raku _non_ unisce automaticamente i loro elementi. Esamina il seguente programma:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;
my @c = @a, @b;

say @c.elems; # 2
say @c;       # [[1 2 3] [4 5]]
```

L'array `@c` ha solo due elementi: gli array `@a` e `@b`. Raku mantiene ogni contenitore come un singolo elemento piuttosto che riversarne il contenuto nell'array esterno. Lo stesso accade per un valore posto tra altri:

```raku
my @a = 1, 2, 3;
my @d = 0, @a, 99;
say @d; # [0 [1 2 3] 99]
```

Quando vuoi effettivamente una singola sequenza piatta, richiedila esplicitamente con la routine `flat`:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat(@a, @b);       # (1 2 3 4 5)
say flat(@a, @b).elems; # 5
```

## Itemizzazione (Itemization)

A volte vuoi l'opposto: proteggere un contenitore dall'essere appiattito, anche dentro `flat`. Il costrutto `$(...)` _itemizza_ il suo argomento — contrassegna il risultato come un singolo elemento. Confronta l'esempio precedente con questo:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat($(@a), @b); # ([1 2 3] 4 5)
```

Qui, `$(@a)` mantiene `@a` come un unico elemento, mentre `@b` viene comunque appiattito nei suoi due valori. Questa è ancora l'idea del sigillo `$`: un `$` significa "tratta questo come una singola cosa".

{% include nav.html %}
