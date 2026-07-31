---
title: 'Soluzione: Analizzate un nome completo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 Trova il programma nel file [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Output

```
｢Hopper｣
```

## Commenti

1. `TOP` descrive tutto il nome; `first` e `last` ne descrivono le parti, con uno spazio letterale in mezzo.

1. Dopo l'analisi ogni token è una cattura con nome, quindi il cognome si legge come `<last>` sull'oggetto match.

{% include nav.html %}
