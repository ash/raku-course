---
title: 'Risinājums: Trijstūra veids'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [triangle-kind.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/triangle-kind.raku).

## Izvade

```
3 3 3: equilateral
3 3 5: isosceles
3 4 5: scalene
1 2 10: invalid
```

## Komentāri

1. `unless` sargs noraida malu garumus, kas pārkāpj trijstūra nevienādību, pirms
notiek jebkāda klasificēšana.

1. Veidu pasaka *atšķirīgo* malu garumu skaits: viens nozīmē, ka visas ir vienādas
(vienādmalu), divi nozīmē, ka vienāds ir tieši viens pāris (vienādsānu), trīs
nozīmē, ka visas ir dažādas (dažādmalu).

1. Cikla mainīgā izjaukšana kā `-> ($a, $b, $c)` katru iekšējo sarakstu izsaiņo
tieši trijās nosauktās malās.

{% include nav.html %}
