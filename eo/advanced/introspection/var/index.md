---
title: 'Uzante `VAR`'
translations_gpt:
---

{% include menu.html %}

`VAR` estas pseudo-metodo kiu redonas la subestadon de la ujo-objekto. Por skalara variablo, la alvoko `.VAR` redonas la `Scalar`-ujon malantau ghi.

## `^name`

Kiam vi havas la ujon, vi povas demandi pri la nomo de ghia klaso per `.^name`:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` sur la variablo redonas la tipon de la _valoro_ (`Int` au `Str`), dum `.VAR.^name` redonas la tipon de la _ujo_, kiu estas `Scalar` en ambau kazoj.

## `default`

La metodo `default` redonas la defaultan valoron de la ujo — tion kion vi ricevas kiam la ujo enhavas nenion propran. Per la trajto `is default` vi difinas ghin eksplicite:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Sen eksplicita defaulto, la defaulta valoro estas la tipo de la ujo. Por netipigita ujo tio estas `Any`, sendepende de kia valoro ghi aktuale enhavas:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

Por tipigita ujo ghi estas la limiga tipo:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

La metodo `name` redonas la nomon de la ujo, inkluzive de la sigelo:

```raku
my $language;
say $language.VAR.name; # $language
```

Atentu ne konfuzi `^name` (la tipo) kaj `name` (la propra nomo de la variablo).

{% include nav.html %}
