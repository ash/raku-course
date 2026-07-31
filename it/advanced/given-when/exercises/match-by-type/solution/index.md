---
title: 'Solution: Matching per tipo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $value = 3.14;

given $value {
    when Int { say 'integer' }
    when Rat { say 'rational' }
    when Str { say 'string' }
}
```

🦋 Puoi trovare il codice sorgente nel file [match-by-type.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/match-by-type.raku).

## Output

```
rational
```

## Commenti

1. Quando il valore da confrontare è un tipo, lo smart match verifica se il topic *è di quel tipo*. `3.14` non è un `Int`, quindi il primo `when` viene saltato.

1. Un letterale decimale come `3.14` è un `Rat` (un numero razionale) in Raku, quindi il secondo `when` trova corrispondenza e il programma stampa `rational`.

{% include nav.html %}
