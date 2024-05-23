---
title: 'Solutio: Iter itineris'
---

{% include menu.html %}

Hash hashorum quem invenies in archivo [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) est paulum redundans sed valde utilis structura datae quam uti potes ad obtinendam distantiam inter quamlibet par civitatum.

Reliquum programma est par annulorum nidificatorum ad perscrutandas omnes segmenta itineris et ad summandas ad totales.

## Codex

Hic est solutio ubi magnus datae set tantum partialiter ostenditur.

```raku
my %distance = 
    Amstelodamum => {
        Athenae => 3082,
        Berolinum => 648,
        # . . .
    },
    # . . .
    Turicum => {
        Amstelodamum => 861,
        Athenae => 2449,
        # . . .
    };

my @iter = < Berolinum Praga Vindobona Turicum Lutetia >;

my $total = 0;
for 0 .. @iter.elems - 2 -> $index {
    my $a = @iter[$index];
    my $ad = @iter[$index + 1];

    my $distantia = %distance{$a}{$ad};
    dic "$a — $ad: $distantia km";
    $total += $distantia;
}

dic "Totum iter: $total km";
```

🦋 Invenies programma cum tota structura datae in archivo [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/travel-distance.raku).

## Output

Pro dato itinere, output programmatis infra ostenditur. Conare alias vias per civitates quas habemus in hash `%distance`.

```console
$ raku exercises/associatives/travel-distance.raku
Berolinum — Praga: 354 km
Praga — Vindobona: 312 km
Vindobona — Turicum: 784 km
Turicum — Lutetia: 557 km
Totum iter: 2007 km
```

{% include nav.html %}