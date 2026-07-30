---
title: 'Oplossing: Een lopende accumulator'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub make-accumulator($start) {
    my $total = $start;
    return -> $amount { $total += $amount };
}

my $acc = make-accumulator(100);

say $acc(10);
say $acc(25);
say $acc(-5);
```

🦋 Je kunt de broncode vinden in het bestand [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Uitvoer

```
110
135
130
```

## Opmerkingen

1. Het teruggegeven blok *sluit om* `$total` heen: die variabele blijft tussen aanroepen bestaan,
dus onthoudt elke aanroep de som van de vorige.

1. `$total += $amount` werkt zowel de lopende som bij als geeft haar terug, en dat is wat
elke `say` afdrukt: `110`, dan `135`, dan `130`.

1. Een alternatief houdt de som binnen het blok zelf, in een `state`-variabele.
Anders dan een gewone `my` wordt een `state`-variabele slechts één keer geïnitialiseerd — de eerste
keer dat het blok draait — en houdt ze daarna haar waarde over latere aanroepen heen:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Elke aanroep van `make-accumulator` levert een vers blok met een eigen
    `state $total` op, dus blijven aparte accumulators onafhankelijk — en de closure
    om `$start` geeft elk nog steeds zijn eigen beginwaarde.

{% include nav.html %}
