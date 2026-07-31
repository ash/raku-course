---
title: Scrivere un iteratore
translations_gpt:
---

{% include menu.html %}

Un iteratore è semplicemente un oggetto che assume il ruolo incorporato `Iterator` e fornisce un metodo `pull-one`. Quel metodo restituisce il valore successivo, oppure `IterationEnd` quando non resta nulla. Ecco un iteratore che conta alla rovescia, consegnando un numero e avvicinandosi a zero:

```raku
class Countdown does Iterator {
    has Int $.n is rw;

    method pull-one {
        return IterationEnd if $!n <= 0;
        return $!n--;
    }
}
```

Ogni chiamata a `pull-one` controlla prima se il conteggio è finito; se no, restituisce il numero attuale e lo decrementa. Il post-decremento `$!n--` restituisce il valore *prima* di sottrarre, quindi i numeri escono `3, 2, 1`. Pilotarlo a mano è come per qualunque altro iteratore:

```raku
my $c = Countdown.new(n => 3);
say $c.pull-one; # 3
say $c.pull-one; # 2
say $c.pull-one; # 1
say $c.pull-one =:= IterationEnd; # True
```

Un iteratore da solo non è qualcosa che un ciclo `for` possa prendere direttamente: un ciclo si aspetta un *iterabile*. Avvolgi l'iteratore in una `Seq` e diventa ciclabile:

```raku
for Seq.new(Countdown.new(n => 3)) -> $x {
    say $x;
}
```

Questo stampa `3`, `2`, `1`. Nel codice di tutti i giorni ricorreresti invece a `gather` / `take`: la forma del [generatore](/it/paradigms/generators) è molto più breve per lo stesso risultato. Vale però la pena vedere una volta il ruolo `Iterator` scritto direttamente, perché mette a nudo ciò su cui sono costruiti `gather`, `map` e ogni ciclo `for`: un oggetto che risponde a un'unica domanda — «qual è il valore successivo?»

{% include nav.html %}
