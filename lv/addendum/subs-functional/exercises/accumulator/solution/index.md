---
title: 'Risinājums: Augošs uzkrājējs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Izvade

```
110
135
130
```

## Komentāri

1. Atgrieztais bloks *noslēdzas pār* `$total`: šis mainīgais dzīvo starp
izsaukumiem, tāpēc katrs izsaukums atceras iepriekšējā summu.

1. `$total += $amount` gan atjaunina augošo summu, gan to atgriež, un tieši to
izdrukā katrs `say`: `110`, tad `135`, tad `130`.

1. Cits variants summu tur paša bloka iekšienē, `state` mainīgajā. Atšķirībā no
parasta `my` `state` mainīgais tiek inicializēts tikai vienreiz — pirmajā bloka
izpildes reizē — un tad savu vērtību patur turpmākajos izsaukumos:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Katrs `make-accumulator` izsaukums rada svaigu bloku ar savu
    `state $total`, tāpēc atsevišķi uzkrājēji paliek neatkarīgi — un slēgums
    pār `$start` katram joprojām piegādā savu sākuma vērtību.

{% include nav.html %}
