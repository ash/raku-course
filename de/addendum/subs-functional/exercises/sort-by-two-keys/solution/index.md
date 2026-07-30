---
title: 'Lösung: Nach zwei Schlüsseln sortieren'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @people =
    { name => 'Anna', age => 30 },
    { name => 'Bob',  age => 25 },
    { name => 'Cara', age => 30 };

for @people.sort({ .<age>, .<name> }) -> %person {
    say "%person<name> (%person<age>)";
}
```

🦋 Du findest den Quellcode in der Datei [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Ausgabe

```
Bob (25)
Anna (30)
Cara (30)
```

## Kommentare

1. Liefert ein `.sort`-Block eine Liste, vergleicht Raku nach dem ersten Element, dann
nach dem zweiten — `{ .<age>, .<name> }` sortiert also zuerst nach Alter und verwendet
den Namen nur, um Gleichstände aufzulösen.

1. Anna und Cara teilen das Alter `30`, sie werden also alphabetisch geordnet; Bob, der
jünger ist, kommt zuerst.

{% include nav.html %}
