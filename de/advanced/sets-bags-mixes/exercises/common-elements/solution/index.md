---
title: 'Solution: Gemeinsame Elemente'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 Du findest den Quellcode in der Datei [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Ausgabe

```
2
False
```

## Kommentare

1. Der Durchschnitt `$a ∩ $b` ist selbst ein Set -- hier `{banana, cherry}` -- und hat daher `2` Elemente. Wenn du ASCII bevorzugst, schreibe `(&)` anstelle von `∩`.

1. Da der Durchschnitt ein Set ist, kannst du die Zugehoerigkeitsfrage mit `∈` stellen. `apple` ist nur im ersten Set enthalten, also ist es nicht im Durchschnitt, und der Test gibt `False` zurück.

{% include nav.html %}
