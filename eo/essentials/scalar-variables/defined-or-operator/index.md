---
title: La difinita-aŭ operatoro
---

{% include menu.html %}

Uzu la tiel nomatan _difinita-aŭ_ operatoron `//` por akiri anstataŭan valoron se variablo ankoraŭ ne estas agordita.

```raku
my $a = 'alpha';
say $a // 'gamma';

my $b;
say $b // 'delta';
```

Ĉi tiu programo presas:

```
alpha
delta
```

La valoro de `$a` estas agordita en la unua linio, do en la esprimo `$a // 'gamma'`, la nuna valoro de `$a` estas uzata. Kontraste, la variablo `$b` ne estis inicializita, do `$b // 'delta'` redonas la dekstran operandon, kaj la programo presas `delta`.

## //=

La kombinaĵo de `//` kaj `=` donas la operatoron `//=` kiu asignas valoron se la variablo ne estas difinita.

```raku
my $x;
$x //= 42;
say $x; # 42
```

{% include nav.html %}