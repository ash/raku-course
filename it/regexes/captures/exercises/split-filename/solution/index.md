---
title: 'Soluzione: Dividete un nome di file'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
if 'report.txt' ~~ / (\w+) '.' (\w+) / {
    say ~$0;
    say ~$1;
}
```

🦋 Trova il programma nel file [split-filename.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/split-filename.raku).

## Output

```
report
txt
```

## Commenti

1. La prima coppia di parentesi cattura il nome di base in `$0`, la seconda cattura l'estensione in `$1`. Il punto fra di esse è fra virgolette perché riconosca un `.` letterale invece di un carattere qualunque.

1. Il `~` davanti a ogni cattura la mette in contesto stringa, così si stampa come testo semplice. Un semplice `say $0` mostrerebbe invece l'oggetto match con le sue parentesi angolari, `｢report｣`. Scrivere `say $0.Str` fa lo stesso di `say ~$0`.

{% include nav.html %}
