---
title: 'Lösung: Warten Sie ein Supply ab'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $sensor = Supply.from-list(18, 21, 19, 23);

my $last = await $sensor;
say "final reading: $last";
```

🦋 Du findest den Quellcode in der Datei [await-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-supply.raku).

## Ausgabe

```
final reading: 23
```

## Kommentare

1. Ein Supply abzuwarten blockiert, bis der Strom alles ausgesandt hat, was er hat — dasselbe „warte, bis es fertig ist“, das `await` bei einem Promise gibt —, und sein Wert ist das **Letzte**, was das Supply ausgesandt hat, `23`.

1. Das passt zu einem Strom, bei dem nur der Endzustand zählt, etwa dem neuesten Sensormesswert. Brauchen Sie *jeden* Wert, ist das eine Aufgabe für `.tap` oder einen `react`-Block, wie in den vorigen Abschnitten.

{% include nav.html %}
