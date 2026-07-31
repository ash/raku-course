---
title: 'Solution: Acronimo'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 Puoi trovare il codice sorgente nel file [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Output

```
HTML
```

## Commenti

1. `$phrase.words` restituisce la lista delle parole. Il ciclo prende il primo carattere di ciascuna con `substr(0, 1)` e lo aggiunge a `$acronym`.

1. Una volta raccolte tutte le iniziali, `uc` converte il risultato in maiuscolo: `HTML`.

{% include nav.html %}
