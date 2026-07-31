---
title: Attributi privati
translations_gpt:
---

{% include menu.html %}

Nella [sezione sugli attributi](/it/oop/attributes) ogni attributo era dichiarato con `$.`, che crea un accessore pubblico. Un attributo dichiarato con `$!`, invece, è _privato_: non ha accessore e non si vede dall'esterno dell'oggetto. È raggiungibile solo dai metodi della classe stessa, dove ci si riferisce a esso come `$!name`.

```raku
class Safe {
    has $!code = 4321;

    method unlocks($attempt) {
        return $attempt == $!code;
    }
}

my $safe = Safe.new;
say $safe.unlocks(4321); # True
say $safe.unlocks(1111); # False
```

Il segreto `$!code` è conservato dentro l'oggetto ma non viene mai esposto: non c'è alcun accessore `.code`, quindi l'unico modo per interagirvi è il metodo `unlocks` che la classe sceglie di fornire. Un tentativo di leggere `$safe.code` o `$safe!code` semplicemente fallisce.

Gli attributi privati sono utili per i dettagli interni che il resto del programma non dovrebbe toccare direttamente.

{% include nav.html %}
