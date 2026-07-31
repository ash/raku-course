---
title: 'Ligado per `:=`'
translations_gpt:
---

{% include menu.html %}

Ĝis nun ĉiu variablo, kiun vi kreis, naskis novan ujon, kaj atribuo per `=` metis valoron _en_ tiun ujon. Ligado, skribata per `:=`, estas alia: ĝi igas nomon referenci _ekzistantan_ ujon anstataŭ krei novan.

Post ligado la du nomoj kunhavas la saman ujon, do ŝanĝo farita tra unu el ili videblas tra la alia:

```raku
my $x = 10;
my $y := $x;

$x = 20;
say $y; # 20
```

Ĉi tie `$y := $x` ne kopias la valoron `10`. Ĝi faras `$y` alia nomo por la sama ujo kiel `$x`. Kiam `$x` poste ricevas `20`, legi `$y` ankaŭ redonas `20`.

Komparu tion kun ordinara atribuo, kiu kopias la valoron en apartan ujon:

```raku
my $x = 10;
my $y = $x; # simpla kopio

$x = 20;
say $y; # 10
```

Ligado funkcias ankaŭ kun tabeloj. La jena faras `@alias` alia nomo por `@data`:

```raku
my @data = 1, 2, 3;
my @alias := @data;

@alias[0] = 99;
say @data; # [99 2 3]
```

Ankoraŭ unu detalo: se vi ligas nomon rekte al literala valoro, ne estas ujo malantaŭ ĝi, do la nomo fariĝas nur-legebla:

```raku
my $pi := 3.14;
$pi = 3;
```

```
Cannot assign to an immutable value
  in block <unit> at t.raku line 2
```

{% include nav.html %}
