---
title: Assegnare un valore
---

{% include menu.html %}

Usa l'operatore `=` per assegnare un nuovo valore a un contenitore scalare.

```raku
my $name;
$name = 'Anna';
```

Ora puoi usare la variabile e, per esempio, stamparla:

```raku
say $name;
```

## Assegnazioni multiple

Più variabili possono essere assegnate contemporaneamente. Ad esempio, ecco come assegnare due scalari in una singola istruzione:

```raku
my ($a, $b);
($a, $b) = 10, 20;
```

Nota che non puoi omettere le parentesi sul lato sinistro. Ma puoi aggiungerle per simmetria sul lato destro:

```raku
($a, $b) = (10, 20);
```

{% include nav.html %}