---
title: 'Soluzione: Analizzate un orario'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Time {
    token TOP    { <hour> ':' <minute> ':' <second> }
    token hour   { \d ** 2 }
    token minute { \d ** 2 }
    token second { \d ** 2 }
}

say Time.parse('09:30:45')<second>;
```

🦋 Trova il programma nel file [parse-a-time.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-time.raku).

## Output

```
｢45｣
```

## Commenti

1. `TOP` descrive tutto l'orario come tre token separati da due punti. Ogni parte è `\d ** 2` — esattamente due cifre — invece di un `\d+` senza limite, così un valore malformato come `09:30:456` viene rifiutato. (Se una parte può non essere riempita di zeri, come l'ora in `9:30:45`, scrivi `\d ** 1..2` per ammettere una o due cifre.)

1. Dopo l'analisi ogni token è una cattura con nome, quindi i secondi si leggono come `<second>` sulla corrispondenza. Aggiungere una terza parte è solo un token in più e un altro segno di due punti — la grammatica scala con naturalezza.

{% include nav.html %}
