---
title: "L'albero delle corrispondenze"
translations_gpt:
---

{% include menu.html %}

Una corrispondenza di grammatica è un albero. La corrispondenza in cima ha una voce con nome per ogni token usato da `TOP`, e quelle voci sono a loro volta oggetti match con le proprie catture. Percorri l'albero con la stessa sintassi `<nome>` che usi per le catture con nome:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \d+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

Ogni ramo è un oggetto match completo, quindi puoi chiedergli il suo `.Str`, la sua posizione o convertirlo. Qui il valore è fatto di cifre, quindi trasformarlo in un numero vero è solo una chiamata di metodo:

```raku
say $m<value>.Int; # 5
```

Per grammatiche più profonde l'albero ha più livelli — `$m<a><b>` raggiunge un token `b` usato dentro un token `a`. Percorrere l'albero così funziona, ma per qualunque cosa oltre un paio di campi diventa scomodo. L'argomento successivo mostra un modo più pulito di attaccare a ogni corrispondenza il valore che vuoi davvero.

{% include nav.html %}
