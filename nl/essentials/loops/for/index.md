---
title: '"for" loop'
---

{% include menu.html %}

De `for`-lus is een krachtig hulpmiddel om over meerdere elementen te itereren. Laten we bijvoorbeeld een reeks nemen:

```raku
for 1..5 -> $n {
    say $n;
}
```

In dit programma neemt de variabele `$n` bij elke iteratie de volgende waarde uit de reeks. Merk op dat je de variabele niet expliciet met `my` hoeft te declareren. Het codeblok wordt herhaald zo vaak als het aantal elementen in de gegevensbron. Dus, het programma print de nummers regel voor regel:

```console
$ raku t.raku 
1
2
3
4
5
```

Het programma iterereert over alle waarden die het [bereik](/nl/essentials/ranges) `1..5` genereert. Dit zijn `1`, `2`, `3`, `4`, en `5`.

## Meer dan één waarde nemen

Een interessante eigenschap van Raku is dat je meer dan één item in een enkele iteratie kunt nemen. Het volgende programma print twee nummers in een lus:

```raku
for 1..6 -> $n, $m {
    say "$n and $m";
}
```

De uitvoer van dit programma is als volgt:

```console
$ raku t.raku
1 and 2
3 and 4
5 and 6
```

{% include nav.html %}