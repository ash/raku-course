---
title: "Soluzione: Indicate l'errore"
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub risky {
    die 'sub failed';
}

{
    risky();

    CATCH {
        default {
            say .^name;
            say .message;
        }
    }
}
```

🦋 Trova il programma nel file [name-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/name-the-error.raku).

## Output

```
X::AdHoc
sub failed
```

## Commenti

1. Il `die` avviene dentro `risky`, ma l'eccezione viaggia fino al chiamante. Il `CATCH` nel blocco che ha chiamato `risky` la gestisce, ed è così che la gestione degli errori funziona normalmente: il fallimento e il suo gestore non devono stare nella stessa routine.

1. Un semplice `die` con una stringa crea un'eccezione `X::AdHoc`, che `.^name` riferisce, e `.message` restituisce il testo passato a `die`.

{% include nav.html %}
