---
title: 'Oplossing: Een teller'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub make-counter($step) {
    my $n = 0;
    return sub { $n += $step };
}

my &count = make-counter(10);
say count();
say count();
say count();
```

🦋 Je kunt de broncode vinden in het bestand [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Uitvoer

```
10
20
30
```

## Opmerkingen

1. De closure legt twee dingen uit `make-counter` vast: de parameter `$step` en de private variabele `$n`. Beide blijven in leven nadat `make-counter` terugkeert.

1. Elke aanroep telt `$step` bij `$n` op en geeft de nieuwe som terug. Een teller die met een andere stap gebouwd is, zou met dat bedrag opschuiven.

{% include nav.html %}
