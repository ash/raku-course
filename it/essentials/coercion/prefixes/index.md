---
title: Conversione dei tipi con operatori prefissi
---

{% include menu.html %}

Un altro modo per trasformare il tipo di un oggetto è utilizzare gli operatori prefissi. Questi sono operatori a un carattere che vengono posizionati immediatamente prima del valore (o di una variabile).

`~` | Coercizione a stringa
`+` | Coercizione numerica
`?` | Coercizione booleana

Considera un esempio di creazione di un valore Booleano a partire da un intero:

```raku
say ?42; # True
```

La conversione in una stringa è simile:

```raku
my $n = -30;
my $s = ~$n;
say $s.chars; # 3, poiché "-30" ha 3 caratteri
```

Nota che con la conversione numerica, il tipo del valore convertito varia a seconda del numero in questione. Confronta le seguenti conversioni da stringhe:

```raku
say (+'100').WHAT;   # (Int)
say (+'3.14').WHAT;  # (Rat)
say (+'27E-1').WHAT; # (Num)
```

Per le conversioni booleane, esiste un'altra routine chiamata `so`. Puoi usarla come operatore prefisso o come metodo:

```raku
my $value = 42;
say so $value; # True
say $value.so; # True
```

{% include nav.html %}