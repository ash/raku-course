---
title: 'Oplossing: Een racende som'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say (1..50).race.map(* ** 2).grep(* %% 2).sum;
```

🦋 Je kunt de broncode vinden in het bestand [parallel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/parallel-sum.raku).

## Uitvoer

```
22100
```

## Opmerkingen

1. `.race` draait de hele keten — elk getal kwadrateren en op de even kwadraten filteren — parallel, en belooft, anders dan `.hyper`, niet de elementen op volgorde terug te geven.

1. Dat is hier prima omdat de laatste stap een som is, die van volgorde onafhankelijk is: de even kwadraten (`2²`, `4²`, …, `50²`) tellen op tot `22100`, in welke volgorde ze ook aankomen. Wanneer je de resultaten alleen combineert (som, aantal), is `.race` de natuurlijke keuze en kan het iets minder overhead meebrengen dan `.hyper`.

{% include nav.html %}
