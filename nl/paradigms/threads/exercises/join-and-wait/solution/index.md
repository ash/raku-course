---
title: 'Oplossing: Samenvoegen en wachten'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 Je kunt de broncode vinden in het bestand [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Uitvoer

```
first
second
```

## Opmerkingen

1. `.finish` blokkeert tot de thread `first` afgedrukt heeft.

1. Pas daarna gaat het hoofdprogramma verder en drukt het `second` af, dus de volgorde ligt vast. Zonder `.finish` zouden de twee regels in willekeurige volgorde kunnen verschijnen.

{% include nav.html %}
