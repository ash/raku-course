---
title: 'Soluzione: Contate le vocali'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
```

🦋 Trova il programma nel file [count-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/count-vowels.raku).

## Output

```
6
```

## Commenti

1. Passare un regex a `.comb` restituisce ogni carattere che corrisponde. La classe di
caratteri `<[aeiouAEIOU]>` elenca le vocali in entrambe le grafie.

1. Il prefisso `+` mette la lista risultante in contesto numerico, dandone la lunghezza —
il numero di vocali.

{% include nav.html %}
