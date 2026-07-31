---
title: Usare `WHAT`
---

{% include menu.html %}

`WHAT` e uno pseudo-metodo che fornisce accesso al tipo di un valore. Puoi usarlo in modo molto simile a `.^name`:

```raku
my $var = 42;

say $var.^name;
say $var.WHAT;
```

Entrambi stampano il tipo con una piccola differenza nella presentazione: `.^name` restituisce il nome semplice, mentre `WHAT` mostra l'oggetto tipo, scritto tra parentesi:

```
Int
(Int)
```

Per una variabile senza vincolo di tipo, il tipo inizia come `Any`. Non appena si assegna un valore, sia `^name` che `WHAT` seguono il tipo del valore memorizzato:

```raku
my $var;
say $var.^name; # Any
say $var.WHAT;  # (Any)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

Con un vincolo di tipo, il tipo e noto immediatamente, anche prima di qualsiasi assegnazione:

```raku
my Str $var;
say $var.^name; # Str
say $var.WHAT;  # (Str)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

## Confrontare oggetti tipo

Poiche `WHAT` restituisce l'oggetto tipo stesso, e possibile confrontarne due con l'operatore di _identita di valore_ `===`, che verifica se entrambi i lati sono esattamente lo stesso valore. Esiste un solo oggetto tipo per ogni tipo, quindi questo e un modo pulito per verificare se due valori condividono lo stesso tipo:

```raku
my $a = 42;
my $b = 100;

say $a.WHAT === $b.WHAT; # True  — both are Int
say $a.WHAT === Int;     # True
say $a.WHAT === Str;     # False
```

A differenza di `==`, che confronta numeri, `===` confronta l'identita, quindi funziona direttamente con gli oggetti tipo (e altri valori).

{% include nav.html %}
