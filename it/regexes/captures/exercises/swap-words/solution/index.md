---
title: 'Soluzione: Prima il cognome'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
if 'Grace Hopper' ~~ / (\w+) ' ' (\w+) / {
    say "$1, $0";
}
```

🦋 Trova il programma nel file [swap-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/swap-words.raku).

## Output

```
Hopper, Grace
```

## Commenti

1. Il nome e il cognome vengono catturati in `$0` e `$1`.

1. Dentro una stringa fra virgolette doppie ogni cattura si interpola come il testo che ha riconosciuto. Stampare `"$1, $0"` mette prima il cognome, seguito da una virgola e uno spazio letterali e poi dal nome.

{% include nav.html %}
