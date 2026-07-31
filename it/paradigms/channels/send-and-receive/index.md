---
title: Inviare e ricevere
translations_gpt:
---

{% include menu.html %}

Crea un channel con `Channel.new`. Metti dentro i valori con `.send` e tirali fuori con `.receive`:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
say $c.receive; # 1
say $c.receive; # 2
```

Un channel è una **coda**: i valori escono nello stesso ordine in cui sono entrati — primo entrato, primo uscito. Quindi il primo `.receive` restituisce `1`, il valore inviato per primo.

Il senso di un channel è che inviare e ricevere si possono fare in sicurezza da **thread diversi** nello stesso momento. Un produttore può continuare a inviare mentre un consumatore continua a ricevere, e Raku si assicura che nessun valore vada perduto o duplicato:

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}
say $c.receive; # 1
```

Qui un compito in secondo piano invia `1, 2, 3`; il programma principale riceve. `.receive` aspetta se il channel è momentaneamente vuoto, quindi il consumatore non corre mai avanti al produttore.

{% include nav.html %}
