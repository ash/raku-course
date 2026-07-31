---
title: 'Soluzione: Analizzate un hashtag'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 Trova il programma nel file [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Output

```
｢raku｣
```

## Commenti

1. `TOP` esplicita il `#` fisso seguito dal token `<tag>`.

1. `.parse` richiede che l'intera stringa corrisponda, e il tag è poi disponibile come cattura `<tag>`.

## Un'alternativa

Puoi invece lasciare che `tag` riconosca l'intero hashtag — il `#` insieme alla parola — e raggiungere la parola attraverso una regola `word` annidata:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

Questo stampa lo stesso `｢raku｣`. Ora `<tag>` cattura tutto `#raku`, mentre la parola al suo interno si raggiunge come `<tag><word>`. La grammatica si legge un po' più come la cosa che descrive — un hashtag *è* un `#` seguito da una parola, e la parola è un pezzo con nome a pieno titolo.

{% include nav.html %}
