---
title: 'Soluzione: Verifica di palindromo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 Trova il programma nel file [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Output

```
level: yes
hello: no
racecar: yes
```

## Commenti

1. `.flip` rovescia i caratteri di una stringa. Una parola è un palindromo esattamente
quando è uguale alla propria inversa, cosa che il ternario trasforma in `yes` o `no`.

{% include nav.html %}
