---
title: 'Solvo: Prefiksu la mesaĝon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Eligo

```
Error: timeout
```

## Komentoj

1. La `.message` de la esceptobjekto donas la tekston transdonitan al `die`.

1. Kunigi ĝin post `Error: ` konstruas la finan linion. La esceptobjekto estas nur valoro, do vi povas uzi ĝian mesaĝon kiel ajn vi volas.

{% include nav.html %}
