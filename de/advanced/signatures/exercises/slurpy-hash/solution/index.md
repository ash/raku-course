---
title: 'Solution: Slurpy benannte Argumente'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 Den Quellcode finden Sie in der Datei [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Ausgabe

```
Anna: colour=red, size=5
```

## Kommentare

1. Der feste positionale Parameter `$name` wird zuerst gefüllt, und der Slurpy-Parameter `*%opts` sammelt dann jedes verbleibende benannte Argument in einem Hash.

1. `%opts.sort` ordnet die Paare nach Schlüssel, sodass die Ausgabe deterministisch ist — `colour` kommt vor `size`. Das `.map` wandelt jedes Paar mit `.key` und `.value` in einen `key=value`-String um, und `.join(', ')` fügt sie zusammen.

1. Der abschließende String interpoliert `$name` und das zusammengesetzte `$details` und erzeugt `Anna: colour=red, size=5`.

{% include nav.html %}
