---
title: '"for" loop'
---

{% include menu.html %}

`for` ansa potentissimum instrumentum est ad iterandum super multa elementa. Exempli gratia, sumamus intervallum:

```raku
for 1..5 -> $n {
    say $n;
}
```

In hoc programmate, variabilis `$n` accipit proximam valorem ex intervallo in unaquaque iteratione. Animadvertendum est te non debere variabilem cum `my` explicite declarare. Codicis pars toties repetitur quot sunt elementa in fonte data. Ita, programma numeros linea per lineam imprimit:

```console
$ raku t.raku 
1
2
3
4
5
```

Programma iterat super omnes valores quos [intervallum](/la/essentials/ranges) `1..5` generat. Hi sunt `1`, `2`, `3`, `4`, et `5`.

## Plus quam unum valorem sumere

Interesting Raku notae est quod potes plus quam unum item in una iteratione sumere. Sequens programma duos numeros in ansa imprimit:

```raku
for 1..6 -> $n, $m {
    say "$n and $m";
}
```

Output huius programmatis est sequens:

```console
$ raku t.raku
1 and 2
3 and 4
5 and 6
```

{% include nav.html %}