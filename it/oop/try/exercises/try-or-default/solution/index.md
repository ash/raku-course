---
title: 'Soluzione: Tentativo o valore predefinito'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $r = try { die 'no' } // 'default';

say $r;
```

🦋 Trova il programma nel file [try-or-default.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-or-default.raku).

## Output

```
default
```

## Commenti

1. Il blocco `try` che fallisce vale un valore non definito.

1. L'operatore defined-or `//` restituisce quindi il suo operando destro, `'default'`, dando un modo pulito di ripiegare in una sola riga.

{% include nav.html %}
