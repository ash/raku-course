---
title: Concordatio intervallarum, typorum, et condicionum
translations_gpt:
---

{% include menu.html %}

Copia `when` non solum aequalitatem comparat. _Congruationem intelligentem_ inter topicum et valorem quem das facit, ita ut intervallis, typis, et condicionibus congruere possis, non solum singulis valoribus.

## Intervalla

Intervallum congruit cum topicum intra eum cadit. Hoc `given`/`when` aptum naturaliter facit ad numeros in fasciculos dividendos:

```raku
my $score = 75;

given $score {
    when 90..100 { say 'A' }
    when 80..89  { say 'B' }
    when 70..79  { say 'C' }
    default      { say 'F' }
}
```

Valor `75` in intervallum `70..79` cadit, ergo programma imprimit:

```
C
```

## Typi

Typus congruit cum topicum illius typi est. Hoc tibi permittit secundum genus valoris dividere:

```raku
my $value = 'Raku';

given $value {
    when Int { say 'an integer' }
    when Str { say 'a string' }
}
```

Quoniam `$value` chordam continet, programma imprimit:

```
a string
```

## Condiciones

Comparationem directe uti potes quoque. Intra `when`, topicum ut `$_` praesto est, ergo condicio sicut `$_ < 0` congruit cum vera est:

```raku
my $n = -7;

given $n {
    when $_ < 0 { say 'negative' }
    when 0      { say 'zero' }
    default     { say 'positive' }
}
```

Hic prima `when` congruit, et programma imprimit:

```
negative
```

{% include nav.html %}
