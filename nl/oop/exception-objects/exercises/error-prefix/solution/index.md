---
title: 'Oplossing: Zet iets voor de melding'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Uitvoer

```
Error: timeout
```

## Opmerkingen

1. De `.message` van het exceptieobject geeft de tekst die aan `die` is meegegeven.

1. Die achter `Error: ` plakken bouwt de uiteindelijke regel op. Het exceptieobject is gewoon een waarde, dus je kunt zijn melding gebruiken zoals je wilt.

{% include nav.html %}
