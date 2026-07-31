---
title: 'Saistīšana ar `:=`'
translations_gpt:
---

{% include menu.html %}

Līdz šim katrs jūsu izveidotais mainīgais radīja jaunu konteineru, un piešķiršana ar `=` ievietoja vērtību _tajā konteinerā_. Saistīšana, ko raksta ar `:=`, ir citāda: tā liek nosaukumam norādīt uz _jau esošu_ konteineru, nevis veidot jaunu.

Pēc saistīšanas abi nosaukumi dalās ar to pašu konteineru, tāpēc izmaiņa, kas veikta caur vienu no tiem, ir redzama caur otru:

```raku
my $x = 10;
my $y := $x;

$x = 20;
say $y; # 20
```

Šeit `$y := $x` nekopē vērtību `10`. Tas padara `$y` par citu nosaukumu tam pašam konteineram, kas ir `$x`. Kad `$x` vēlāk tiek iestatīts uz `20`, nolasot `$y` arī atgriež `20`.

Salīdziniet to ar parasto piešķiršanu, kas kopē vērtību atsevišķā konteinerā:

```raku
my $x = 10;
my $y = $x; # a plain copy

$x = 20;
say $y; # 10
```

Saistīšana darbojas arī ar masīviem. Šis piemērs padara `@alias` par citu nosaukumu masīvam `@data`:

```raku
my @data = 1, 2, 3;
my @alias := @data;

@alias[0] = 99;
say @data; # [99 2 3]
```

Vēl viena detaļa: ja saistāt nosaukumu tieši ar literālu vērtību, aiz tā nav konteinera, tāpēc nosaukums kļūst tikai lasāms:

```raku
my $pi := 3.14;
$pi = 3;
```

```
Cannot assign to an immutable value
  in block <unit> at t.raku line 2
```

{% include nav.html %}
