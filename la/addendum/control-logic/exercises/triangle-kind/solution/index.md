---
title: 'Solutio: Genus trianguli'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub kind($a, $b, $c) {
    return 'invalid' unless $a + $b > $c && $a + $c > $b && $b + $c > $a;

    given ($a, $b, $c).Set.elems {
        when 1  { 'equilateral' }
        when 2  { 'isosceles' }
        default { 'scalene' }
    }
}

for (3, 3, 3), (3, 3, 5), (3, 4, 5), (1, 2, 10) -> ($a, $b, $c) {
    say "$a $b $c: { kind($a, $b, $c) }";
}
```

🦋 Inveni codicem fontem in archivo [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Exitus

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Commentarii

1. Custodia `unless` longitudines laterum quae inaequalitatem trianguli frangunt reicit
antequam ulla distinctio fiat.

1. Numerus longitudinum laterum *distinctarum* genus dicit: una significat omnia aequalia
(aequilaterum), duae exacte unum par aequale (isosceles), tres omnia
diversa (scalenum).

1. Variabilem anuli ut `-> ($a, $b, $c)` dissolvere unumquemque indicem internum
recta in tria latera nominata expandit.

{% include nav.html %}
