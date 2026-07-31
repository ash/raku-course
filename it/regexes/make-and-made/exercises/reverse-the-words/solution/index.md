---
title: 'Soluzione: Invertite le parole'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Phrase {
    token TOP  { <word> [ ' ' <word> ]* { make $<word>».made.join(' ') } }
    token word { \w+ { make $/.flip } }
}

say Phrase.parse('hello world').made;
```

🦋 Trova il programma nel file [reverse-the-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/reverse-the-words.raku).

## Output

```
olleh dlrow
```

## Commenti

1. Ogni token `word` produce il proprio testo rovesciato: il suo blocco in linea gira ogni volta che una parola corrisponde, e `make $/.flip` conserva la parola — `$/` è la corrispondenza corrente — scritta all'indietro.

1. `TOP` riconosce le parole con `<word> [ ' ' <word> ]*` — una parola, poi un numero qualunque di «spazio poi parola» — e le combina. `$<word>` è l'elenco di ogni corrispondenza di parola; `».made` ne estrae il testo rovesciato conservato da ciascuna, e `.join(' ')` ricostruisce la frase con gli spazi.

1. Quella forma «elemento, poi elemento, poi elemento…» è abbastanza comune da avere una scorciatoia: il separatore `%`. Scrivere `<word>+ % ' '` significa «uno o più `<word>`, separati da uno spazio», e riconosce esattamente le stesse frasi di `<word> [ ' ' <word> ]*`, solo in modo più compatto.

1. Quindi qui `make` e `made` lavorano su due livelli: i pezzi piccoli producono i propri valori, e il tutto viene prodotto a partire da essi. Leggere `.made` sul risultato dà `olleh dlrow`.

{% include nav.html %}
