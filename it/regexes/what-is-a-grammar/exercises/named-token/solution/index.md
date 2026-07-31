---
title: 'Soluzione: Un token con nome'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 Trova il programma nel file [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Output

```
｢hello｣
```

## Commenti

1. `my regex word { \w+ }` dà un nome allo schema perché possa essere riusato.

1. Scrivere `<word>` nello schema lo riconosce e ne cattura il risultato sotto lo stesso nome, raggiungibile come `$<word>`. La prima sequenza di caratteri di parola è `hello`.

{% include nav.html %}
