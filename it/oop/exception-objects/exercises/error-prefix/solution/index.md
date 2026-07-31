---
title: 'Soluzione: Anteponete un prefisso al messaggio'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
{
    die 'timeout';

    CATCH {
        default {
            say 'Error: ' ~ .message;
        }
    }
}
```

🦋 Trova il programma nel file [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Output

```
Error: timeout
```

## Commenti

1. Il `.message` dell'oggetto eccezione dà il testo passato a `die`.

1. Concatenarlo dopo `Error: ` costruisce la riga finale. L'oggetto eccezione è solo un valore, quindi puoi usarne il messaggio come preferisci.

{% include nav.html %}
