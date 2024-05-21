---
title: Operatore ternario
---

{% include menu.html %}

L'operatore ternario in Raku è una costruzione a due parti `??` ... `!!`. Un test booleano è seguito da due espressioni, una delle quali viene eseguita a seconda del risultato del test.

```raku
my $shines = 'Sun';
my $day-time = $shines eq 'Sun' ?? 'day' !! 'night';
say $day-time;
```

Con il valore attuale della variabile `$shines`, questo programma stampa `day`. Se lo cambi in `Moon`, il risultato sarà `night`.

È possibile concatenare espressioni ternarie. Assicurati solo che non diventi troppo complicato.

```raku
my $hours = 20;
my $day-time =
    $hours <= 6 ?? 'Night' !!
    $hours <= 12 ?? 'Morning' !! 
    $hours <= 18 ?? 'Afternoon' !! 'Evening';
say $day-time;
```

Qui, a seconda del valore in `$hours`, verrà riportata una diversa parte della giornata.

{% include nav.html %}