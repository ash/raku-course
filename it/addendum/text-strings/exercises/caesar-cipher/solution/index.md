---
title: 'Soluzione: Cifrario di Cesare'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 Trova il programma nel file [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Output

```
KHOOR
```

## Commenti

1. L'operatore di traslitterazione `tr///` mappa i caratteri del primo insieme su quelli
del secondo, posizione per posizione. `A..Z` si allinea con `D..ZA..C`, quindi `A` diventa
`D`, `B` diventa `E`, e la coda `X Y Z` torna su `A B C`.

1. `tr///` cambia la stringa sul posto, quindi dopo la corrispondenza `$text` contiene
esso stesso la parola cifrata.

{% include nav.html %}
