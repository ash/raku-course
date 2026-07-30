---
title: 'Oplossing: Hoofdletters met react'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 Je kunt de broncode vinden in het bestand [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Uitvoer

```
[A B C]
```

## Opmerkingen

1. De `whenever`-body draait één keer per waarde, zet haar in hoofdletters en duwt haar op `@collected`.

1. `react` wacht tot de enkele supply klaar is, dus tegen de tijd dat `say` draait bevat de array alle drie de waarden op volgorde: `[A B C]`.

1. Een supply heeft eigen lijstachtige methoden, dus je zou de hoofdletters in de stroom kunnen zetten in plaats van in de body — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) { @collected.push($_) }` — met hetzelfde effect. `.map` op een supply vormt elke waarde om terwijl ze langsstroomt; de keuze is eenvoudigweg of de omvorming bij de stroom of bij de reactie hoort.

{% include nav.html %}
