---
title: "Soluzione: Invertite l'ordine delle parole"
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 Trova il programma nel file [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Output

```
nice really is Raku
```

## Commenti

1. `.words` spezza la frase in una lista, `.reverse` rovescia l'ordine della lista e
`.join(' ')` riattacca le parole con singoli spazi.

{% include nav.html %}
