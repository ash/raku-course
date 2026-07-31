---
title: Il caso base
translations_gpt:
---

{% include menu.html %}

Ogni subroutine ricorsiva ha bisogno di un _caso base_: una condizione in cui restituisce una risposta **senza** chiamare di nuovo se stessa. Senza di esso la subroutine chiamerebbe se stessa per sempre.

Nel fattoriale il caso base era «`$n` è `1` o meno». Ecco un altro esempio, che conta alla rovescia fino a zero:

```raku
sub countdown($n) {
    return if $n < 1;   # base case: stop
    say $n;
    countdown($n - 1);  # recursive step
}

countdown(3);
```

Il programma stampa:

```
3
2
1
```

La prima riga è il caso base: quando `$n` scende sotto `1`, la subroutine ritorna immediatamente e la catena di chiamate finisce. Il passo ricorsivo si muove sempre **verso** il caso base chiamando `countdown` con un numero più piccolo.

Se dimentichi il caso base, o se i passi non lo raggiungono mai, la ricorsione non si ferma e il programma alla fine fallisce. Una subroutine ricorsiva corretta ha sempre due cose: un caso base che chiude la ricorsione e un passo che avvicina ogni chiamata a esso.

{% include nav.html %}
