---
title: Avverbi di quoting
---

{% include menu.html %}

Il comportamento di un costrutto di quoting può essere regolato con gli _avverbi_. Ogni funzionalità di quoting — interpolazione degli scalari, esecuzione di closure incorporate, elaborazione dei backslash — è controllata dal proprio avverbio, che attiva o disattiva quella singola funzionalità, così puoi partire da `q` o `Q` e aggiungere esattamente le funzionalità di cui hai bisogno.

Alcuni avverbi comuni:

* `:s` / `:scalar` — interpola le variabili scalari (`$x`)
* `:c` / `:closure` — interpola il codice incorporato in `{ … }`
* `:b` / `:backslash` — elabora le sequenze di escape con backslash come `\n`

Aggiungine uno a `q` per abilitare una singola funzionalità. Per esempio, permetti il codice incorporato ma nient'altro:

```raku
say q/result: {3 * 4}/;   # result: {3 * 4}  — plain q leaves the block untouched
say q:c/result: {3 * 4}/; # result: 12        — :c runs the block
```

Con il semplice `q` il blocco `{ 3 * 4 }` viene stampato letteralmente; solo `:c` fa eseguire il blocco e ne inserisce il valore, mentre un `$variable` verrebbe comunque lasciato invariato. Nota i delimitatori `/…/` qui: delimitare la stringa con `{…}` funzionerebbe comunque — il compilatore conta correttamente le parentesi graffe annidate — ma in quel caso il blocco interno `{ 3 * 4 }` viene letto come parte del testo delimitato invece che come una closure, quindi `:c` lo lascerebbe letterale. Quando il testo contiene un blocco `{ … }`, scegli un delimitatore diverso da `{…}` affinché la closure venga effettivamente eseguita. Puoi aggiungere l'interpolazione scalare alla forma altrimenti letterale `Q`:

```raku
my $name = 'Anna';
say Q:s{Hi, $name}; # Hi, Anna
```

Gli avverbi possono anche **disattivare** funzionalità con un `!`. Per usare `qq` ma mantenere `$` letterale:

```raku
my $price = 5;
say qq:!s{costs $price dollars}; # costs $price dollars
```

`qq` è equivalente a `Q` con tutti gli avverbi di interpolazione attivati, e `q` è equivalente a `Q` con un insieme ridotto. Gli avverbi ti danno un controllo fine tra questi due estremi.

{% include nav.html %}
