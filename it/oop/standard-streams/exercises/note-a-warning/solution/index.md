---
title: 'Soluzione: Un avviso con `note`'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 Trova il programma nel file [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Output

```
Warning: the value is negative
3
```

## Commenti

1. `note` manda l'avviso all'errore standard, e solo quando il valore è davvero negativo. `say` manda il risultato vero — il valore assoluto `3` — all'output standard.

1. Tenere la diagnostica sull'errore standard significa che non inquina l'output vero del programma: scartare l'errore standard con `2>/dev/null` lascia dietro di sé solo il `3`.

{% include nav.html %}
