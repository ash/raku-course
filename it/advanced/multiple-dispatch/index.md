---
title: Dispatch multiplo
translations_gpt:
---

{% include menu.html %}

Nella parte Essenziali hai incontrato le [_multi-funzioni_](/it/essentials/more-on-functions/multi-functions): diverse subroutine che condividono lo stesso nome, dove Raku sceglie quella giusta in base ai tipi degli argomenti. Questo meccanismo si chiama _multiple dispatch_.

Finora la scelta veniva fatta in base al _tipo_ degli argomenti. Una clausola `where` permette di andare oltre e effettuare il dispatch anche in base al _valore_. Si scrive dopo un parametro e contiene una condizione che l'argomento deve soddisfare affinche quel candidato venga scelto:

```raku
multi sub info(Int $n where $n < 0)  { say "$n is negative" }
multi sub info(Int $n where $n == 0) { say "$n is zero" }
multi sub info(Int $n where $n > 0)  { say "$n is positive" }

info(-5);
info(0);
info(7);
```

Ogni chiamata va al candidato la cui condizione risulta vera per il valore dato:

```
-5 is negative
0 is zero
7 is positive
```

Tutti e tre i candidati hanno la stessa firma per quanto riguarda i tipi — un singolo `Int` — quindi senza le clausole `where` entrerebbero in conflitto. Le condizioni li rendono distinti.

## Un caso base per la ricorsione

Un uso comune di `where` e fornire il punto di arresto di una ricorsione come candidato separato. Ecco di nuovo il fattoriale, suddiviso in due multi-sub:

```raku
multi sub fact(Int $n where $n <= 1) { 1 }
multi sub fact(Int $n)               { $n * fact($n - 1) }

say fact(5); # 120
```

Il primo candidato gestisce il caso base (`$n` uguale a `1` o inferiore) e restituisce semplicemente `1`. Ogni altro valore va al secondo candidato, che chiama di nuovo `fact` con un numero piu piccolo. Non c'e nessun `if` all'interno della funzione — la scelta tra caso base e passo ricorsivo viene fatta dal dispatcher.

{% include nav.html %}
