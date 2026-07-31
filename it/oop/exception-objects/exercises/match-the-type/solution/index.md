---
title: 'Soluzione: Abbinate il tipo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
{
    my $x = 1 / 0;
    say $x;

    CATCH {
        when X::Numeric::DivideByZero {
            say 'cannot divide by zero';
        }
    }
}
```

🦋 Trova il programma nel file [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Output

```
cannot divide by zero
```

## Commenti

1. In Raku `1 / 0` non esplode immediatamente; produce un `Failure` pigro. L'eccezione viene sollevata solo quando *usiamo* il valore, qui provando a farne `say`.

1. L'eccezione sollevata è del tipo incorporato `X::Numeric::DivideByZero`, e `when X::Numeric::DivideByZero` la riconosce con precisione. Confrontare un tipo specifico, invece di intercettare tutto con `default`, ti permette di gestire errori diversi in modi diversi.

{% include nav.html %}
