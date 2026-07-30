---
title: 'Oplossing: Een teller'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Counter {
    has $.count is rw = 0;
}

my $c = Counter.new;
say $c.count;

$c.count++ for ^5;

say $c.count;
```

🦋 Je kunt de broncode vinden in het bestand [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Uitvoer

```
0
5
```

## Opmerkingen

1. Het attribuut is als `is rw` gedeclareerd zodat zijn accessor een schrijfbare container teruggeeft, en `= 0` geeft het een beginwaarde. De eerste `say` bevestigt dat een verse teller werkelijk op die standaardwaarde `0` begint.

1. Omdat de accessor schrijfbaar is, werkt hem verhogen met `++` zoals verwacht.

{% include nav.html %}
