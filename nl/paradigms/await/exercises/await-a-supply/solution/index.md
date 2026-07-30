---
title: 'Oplossing: Wacht een supply af'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $sensor = Supply.from-list(18, 21, 19, 23);

my $last = await $sensor;
say "final reading: $last";
```

🦋 Je kunt de broncode vinden in het bestand [await-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-supply.raku).

## Uitvoer

```
final reading: 23
```

## Opmerkingen

1. Een supply afwachten blokkeert tot de stroom alles uitgezonden heeft wat ze heeft — hetzelfde "wacht tot het klaar is" dat `await` bij een promise geeft — en haar waarde is het **laatste** dat de supply uitzond, `23`.

1. Dat past bij een stroom waarbij alleen de eindtoestand telt, zoals de nieuwste sensormeting. Als je *elke* waarde nodig hebt, is dat een taak voor `.tap` of een `react`-blok, zoals in de vorige secties.

{% include nav.html %}
