---
title: Vow 🆕
translations_gpt:
---

{% include menu.html %}

Quando chiami tu `$p.keep(...)`, chiunque abbia `$p` potrebbe concluderla.
A volte vuoi l'opposto: il codice che *produce* il risultato dovrebbe essere l'unico
autorizzato a concludere la promise, mentre tutti gli altri possono solo aspettarla.
Quella separazione è un **voto**.

`Promise.new` ti dà una promise; chiamarvi sopra `.vow` restituisce un `Vow`, il diritto
esclusivo di mantenere o rompere quella promise. Da quel momento la promise è pensata
come di sola lettura: si conclude attraverso il voto. La forma abituale è un produttore
che tiene privato il voto e restituisce soltanto la promise:

```raku
sub after($seconds) {
    my $p = Promise.new;
    my $v = $p.vow;                       # take the settle-right
    start {
        sleep $seconds;
        $v.keep("done after $seconds s"); # settle it through the vow
    }
    return $p;                            # callers get only the read side
}

my $job = after(0.2);
say $job.status;   # Planned
say await $job;    # done after 0.2 s
```

Prendere il voto rende la promise davvero di sola lettura: da quel momento `$p.keep` e
`$p.break` vengono rifiutati, perché il voto possiede ora il diritto esclusivo di concluderla.

```raku
my $p = Promise.new;
my $v = $p.vow;

$p.keep(1); # dies: Access denied to keep/break this Promise; already vowed
```

Così il chiamante può attendere la promise, concatenarvi un `.then` o controllarne lo
`.status`, ma non può concluderla: solo chi tiene il voto può. È così che le librerie
trasformano le interfacce basate su callback ed eventi in promise ordinarie: creano una
promise, ne tengono il voto e la soddisfano dall'interno della callback quando l'evento
finalmente arriva.

È anche esattamente ciò che `start` fa per te dietro le quinte: crea una promise, ne tiene
il voto per sé e conclude la promise con il valore del blocco (o la rompe se il blocco
muore). Costruire a mano la promise e il suo voto ti permette semplicemente di fare la
stessa cosa quando il risultato non viene da un unico blocco di codice.

{% include nav.html %}
