---
title: 'Risinājums: Prefikss ziņojumam'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Izvade

```
Error: timeout
```

## Komentāri

1. Izņēmuma objekta `.message` dod tekstu, kas padots `die`.

1. Savienojot to aiz `Error: `, tiek uzbūvēta galīgā rinda. Izņēmuma objekts ir vienkārši vērtība, tāpēc tā paziņojumu varat izmantot, kā vēlaties.

{% include nav.html %}
