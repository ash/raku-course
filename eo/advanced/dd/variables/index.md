---
title: Dumpado de variabloj
---

{% include menu.html %}

Voku `dd` por vidi kion variablo enhavas, simile kiel vi farus per `say`:

```raku
my $var = 42;
dd $var;
```

Kune kun la valoro, `dd` ankaŭ montras la nomon de la variablo:

```console
$var = 42
```

Se la variablo havas deklaritan tipon, la tipo ankaŭ aperas. Komparu la eligon de la sekva programo kun la antaŭa:

```raku
my Int $var = 42;
dd $var;
```

```console
Int $var = 42
```

Ĉi tio estas la ĉefa diferenco de `say`: ununura `dd` vokita sur skalaro diras al vi la nomon, kaj, kiam konata, la tipon de la datumoj — do vi povas meti plurajn `dd`-vokojn en programon kaj ankoraŭ rekoni, kiu eligo apartenas al kiu variablo.

Vi povas ankaŭ elmontri pli kompleksajn datumstrukturojn, kiel tabelojn aŭ hakojn. Ĉi tie `dd` presas kodosimilan reprezenton de la valoro:

```raku
my @arr = 10, 20, [1, 2, 3], 30;
dd @arr;
```

```console
[10, 20, [1, 2, 3], 30]
```

Rimarku, ke la nestita tabelo restas klare videbla (tamen sen variablonomo). Same funkcias por hakoj, kies ŝlosilojn `dd` presas en ordigita ordo:

```raku
my %hash =
    gamma => 'g',
    alpha => 'a',
    beta  => 'b';
dd %hash;
```

```console
{:alpha("a"), :beta("b"), :gamma("g")}
```

{% include nav.html %}
