---
title: Introspezione con `WHAT`
---

{% include menu.html %}

È possibile vedere il tipo di dati in una variabile chiamando il metodo `WHAT` su di essa:

```raku
my $n = 42;
my $s = '42';
say $n.WHAT; # (Int)
say $s.WHAT; # (Str)
```

Il tipo viene stampato tra parentesi, come mostrato nei commenti. Ad esempio, `(Int)` o `(Str)`.

Non c'è problema a chiamare un metodo su un letterale stesso. Ad esempio:

```raku
say 42.WHAT;      # (Int)
say (-1).WHAT;    # (Int)
say 'Hello'.WHAT; # (Str)
say True.WHAT;    # (Bool)
```

Nota che nel caso di `-1`, mettiamo il numero tra parentesi, poiché `say -1.WHAT` tenterebbe di negare il risultato di `1.WHAT`, il che porta a un'eccezione.

{% include nav.html %}