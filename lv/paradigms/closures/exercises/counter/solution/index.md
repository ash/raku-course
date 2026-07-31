---
title: 'Risinājums: Skaitītājs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Izvade

```
10
20
30
```

## Komentāri

1. Slēgums satver no `make-counter` divas lietas: parametru `$step` un privāto mainīgo `$n`. Abi paliek dzīvi pēc tam, kad `make-counter` atgriezusies.

1. Katrs izsaukums pieskaita `$n` vērtību `$step` un atgriež jauno summu. Skaitītājs, uzbūvēts ar citu soli, virzītos par šo lielumu.

{% include nav.html %}
