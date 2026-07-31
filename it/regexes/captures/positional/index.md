---
title: Catture posizionali
translations_gpt:
---

{% include menu.html %}

Metti una parte dello schema fra parentesi tonde `( )` per _catturarla_. Dopo una corrispondenza riuscita, ogni pezzo catturato è disponibile come `$0`, `$1` e così via, numerato da zero nell'ordine in cui si aprono le parentesi:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $0; # ｢2025｣
    say $1; # ｢06｣
}
```

La prima coppia di parentesi ha catturato l'anno in `$0`, la seconda ha catturato il mese in `$1`. Il testo fra di esse — il `-` letterale — viene riconosciuto ma non catturato.

Ogni cattura è a sua volta un piccolo oggetto match, quindi puoi chiederle il suo `.Str`, la sua posizione e così via. In una stringa fra virgolette doppie una cattura si interpola come il testo che ha riconosciuto:

```raku
if 'hello world' ~~ / (\w+) ' ' (\w+) / {
    say "$1 $0"; # world hello
}
```

Qui le due parole catturate vengono stampate nell'ordine opposto, il che le scambia.

Le catture sono conservate anche nella variabile di match `$/`, e `$0` è in realtà un modo breve di scrivere `$/[0]`. Puoi lavorare direttamente attraverso `$/`:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $/[0];    # ｢2025｣
    say $/[1];    # ｢06｣
    say $/.elems; # 2
}
```

`$/` è l'intero oggetto match, indicizzarlo raggiunge le catture posizionali, e `.elems` ti dice quante ce ne sono.

{% include nav.html %}
