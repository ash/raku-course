---
title: 'Soluzione: Sopravvivete a un ciclo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
for 1, 2, 3 -> $n {
    if $n == 2 {
        die "bad: $n";
    }
    say "ok: $n";

    CATCH {
        default {
            say "caught: " ~ .message;
        }
    }
}
```

🦋 Trova il programma nel file [survive-a-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/survive-a-loop.raku).

## Output

```
ok: 1
caught: bad: 2
ok: 3
```

## Commenti

1. Il phaser `CATCH` gestisce un'eccezione sollevata dentro il corpo del ciclo, quindi il `die` della seconda iterazione viene intercettato invece di essere fatale.

1. Una volta gestita l'eccezione, il ciclo prosegue semplicemente con il valore successivo, ed è per questo che `ok: 3` viene comunque stampato.

{% include nav.html %}
