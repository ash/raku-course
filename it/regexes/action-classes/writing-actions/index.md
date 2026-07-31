---
title: Scrivere una classe di azione
translations_gpt:
---

{% include menu.html %}

Una classe di azioni è una classe ordinaria con un metodo per ogni token della grammatica. Ogni metodo riceve la corrispondenza di quel token come `$/` e chiama `make` per attaccare un valore — esattamente ciò che faceva il blocco in linea, ma tenuto separato dallo schema:

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

La grammatica ora contiene solo lo schema; tutto il significato vive in `SumActions`. Nota come i metodi cooperano: `a` e `b` producono ciascuno un intero, e `TOP` li legge con `$<a>.made` e `$<b>.made` e ne produce la somma.

Per usare la classe di azioni, passa un'istanza a `.parse` con l'argomento nominato `actions`, poi leggi il risultato in cima con `.made`:

```raku
say Sum.parse('2+3', actions => SumActions.new).made; # 5
```

Mentre la grammatica analizza, il metodo di ogni token gira automaticamente e costruisce il valore dal basso verso l'alto. Il risultato sulla corrispondenza in cima è il valore che vuoi — qui il numero `5`.

{% include nav.html %}
