---
title: 'Oplossing: Wacht een promise af'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 Je kunt de broncode vinden in het bestand [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Uitvoer

```
(slow quick medium)
```

## Opmerkingen

1. Alle drie de taken starten tegelijk en slapen gelijktijdig, dus duurt het hele programma ongeveer `0.3` seconde — de duur van de traagste taak, niet de som van alle drie.

1. Hoewel `quick` als eerste klaar is en `slow` als laatste, is de uitvoer `(slow quick medium)`: `await` geeft elk resultaat terug op dezelfde positie als zijn promise in `@jobs`. De volgorde van voltooiing beïnvloedt alleen *wanneer* `await` terugkeert, nooit de schikking van de resultaten.

{% include nav.html %}
