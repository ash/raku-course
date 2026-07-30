---
title: 'Oplossing: Twee exceptietypen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class TooSmall is Exception {
    method message { 'too small' }
}

class TooBig is Exception {
    method message { 'too big' }
}

for TooSmall, TooBig -> $type {
    {
        $type.new.throw;

        CATCH {
            when TooSmall { say 'small' }
            when TooBig   { say 'big' }
        }
    }
}
```

🦋 Je kunt de broncode vinden in het bestand [two-exceptions.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/two-exceptions.raku).

## Uitvoer

```
small
big
```

## Opmerkingen

1. De lus werpt bij de eerste ronde een `TooSmall` en bij de tweede een `TooBig`, elk binnen een eigen blok met een eigen `CATCH`.

1. De `CATCH`-faser heeft een `when`-tak voor elk exceptietype. Bij elke ronde draait alleen de tak die op het geworpen type matcht — dus de eerste ronde drukt `small` af en de tweede `big`. Zo reageert één stel afhandelaars verschillend op verschillende soorten fouten.

{% include nav.html %}
