---
title: 'Soluzione: Un booleano con proto'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Bool {
    token TOP { <bool> }

    proto token bool {*}
    token bool:sym<true>  { 'true' }
    token bool:sym<false> { 'false' }
}

say Bool.parse('true').defined;
say Bool.parse('false').defined;
say Bool.parse('unknown').defined;
```

🦋 Trova il programma nel file [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Output

```
True
True
False
```

## Commenti

1. Il proto token `bool` ha due varianti con nome, `true` e `false`.

1. Ogni analisi sceglie la variante che corrisponde, quindi riescono sia `'true'` sia `'false'`. Un proto token è il modo ordinato in cui una grammatica dice «una di queste alternative con nome».

1. `'unknown'` non corrisponde ad alcuna variante, quindi il proto token non ha nulla a cui affidare il lavoro e l'analisi fallisce — `False`. Il proto accetta esattamente le alternative che elenchi, e nient'altro.

{% include nav.html %}
