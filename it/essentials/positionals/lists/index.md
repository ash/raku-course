---
title: Liste
---

{% include menu.html %}

Le liste sono simili agli array ma sono immutabili. Non è possibile cambiare la dimensione o gli elementi di una lista. Usa le parentesi per creare una lista:

```raku
my $odd = (1, 3, 5, 7, 9);
```

## Sottoscrivere le liste

Per accedere agli elementi individuali di una lista, usa le parentesi quadre con l'indice:

```raku
say $odd[3]; # 7
```

Tuttavia, non è possibile impostare un nuovo valore:

```raku
$odd[3] = 8; # Non OK
```

Un tale tentativo causa un'eccezione:

    Cannot modify an immutable List ((1 3 5 7 9))
      in block <unit> at t.raku line 4

## Assegnare una lista a un array

Cosa succede quando salvi una lista in una variabile con il sigillo `@`?

```raku
my @data = (40, 42, 44);
```

In questo caso, la variabile `@data` contiene un array, e puoi modificarne gli elementi.

%%tipblock
## Variabile vs lista

Nota che il fatto che le liste siano immutabili non significa che non puoi riutilizzare la variabile che le contiene.

```raku
my $elements = (1, 2);
say $elements[0]; # 1

$elements = (3, 4);
say $elements[0]; # 3
```

%%/tipblock

{% include nav.html %}