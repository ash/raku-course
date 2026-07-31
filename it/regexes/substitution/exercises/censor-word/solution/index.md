---
title: 'Soluzione: Censurate una parola'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 Trova il programma nel file [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Output

```
*** *** plan
```

## Commenti

1. L'operatore `s///` rimpiazza il `secret` riconosciuto con il testo letterale `***`, scritto senza virgolette, e cambia `$s` sul posto.

1. È l'avverbio `:g` a fargli rimpiazzare **entrambe** le occorrenze. Senza di esso verrebbe censurato solo il primo `secret`.

{% include nav.html %}
