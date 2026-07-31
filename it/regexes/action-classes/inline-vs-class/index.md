---
title: Azioni in linea e classi di azione
translations_gpt:
---

{% include menu.html %}

Ora hai due modi di attaccare un significato a un'analisi. Quale usare?

Le **azioni in linea** mettono un blocco `{ make … }` proprio dentro il token:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}
```

Sono rapide da scrivere e vanno bene per una grammatica minuscola o uno script usa e getta. Il prezzo è che lo schema e la logica restano aggrovigliati.

Una **classe di azioni** tiene separate le due cose — la grammatica descrive la forma, la classe di azioni descrive il significato:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

Questa separazione ha vantaggi concreti quando una grammatica cresce: lo schema resta leggibile, e puoi accoppiare **una grammatica con più classi di azioni** — una che valuta, una che formatta, una che costruisce una struttura dati — senza toccare affatto la grammatica.

La regola pratica: azioni in linea per qualcosa di piccolo e usa e getta, una classe di azioni per qualunque cosa dovrai mantenere o riusare.

{% include nav.html %}
