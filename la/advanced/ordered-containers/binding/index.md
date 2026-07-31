---
title: 'Ligatio cum `:=`'
translations_gpt:
---

{% include menu.html %}

Hucusque, quaeque variabilis quam creasti novum continentem generavit, et assignatio cum `=` valorem _in_ illum continentem posuit. Vinculum, cum `:=` scriptum, diversum est: facit ut nomen ad continentem _iam existentem_ referat pro novo creando.

Post vinculum, duo nomina eundem continentem communicant, itaque mutatio per unum facta per alterum visibilis est:

```raku
my $x = 10;
my $y := $x;

$x = 20;
say $y; # 20
```

Hic, `$y := $x` valorem `10` non copiat. Facit `$y` aliud nomen pro eodem ipso continenti ac `$x`. Cum `$x` postea ad `20` ponitur, `$y` legere quoque `20` reddit.

Compara hoc cum assignatione ordinaria, quae valorem in continentem separatum copiat:

```raku
my $x = 10;
my $y = $x; # a plain copy

$x = 20;
say $y; # 10
```

Vinculum cum ordinibus quoque operatur. Sequens `@alias` aliud nomen pro `@data` facit:

```raku
my @data = 1, 2, 3;
my @alias := @data;

@alias[0] = 99;
say @data; # [99 2 3]
```

Unum amplius: si nomen directe ad valorem litteralem vincis, nullus continens post eum est, itaque nomen solum ad legendum fit:

```raku
my $pi := 3.14;
$pi = 3;
```

```
Cannot assign to an immutable value
  in block <unit> at t.raku line 2
```

{% include nav.html %}
