---
title: '`VAR` izmantošana'
translations_gpt:
---

{% include menu.html %}

`VAR` ir pseidometode, kas atgriež pamatā esošo konteinera objektu. Skalāram mainīgajam `.VAR` izsaukums atgriež `Scalar` konteineru, kas atrodas aiz tā.

## `^name`

Kad jums ir konteineris, varat noskaidrot tā klases nosaukumu ar `.^name`:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` uz mainīgā atgriež _vērtības_ tipu (`Int` vai `Str`), savukārt `.VAR.^name` atgriež _konteinera_ tipu, kas abos gadījumos ir `Scalar`.

## `default`

Metode `default` atgriež konteinera noklusējuma vērtību — to, ko saņemat, kad konteineris pats neko nesatur. Ar iezīmi `is default` to var iestatīt tieši:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Bez norādīta noklusējuma noklusējuma vērtība ir konteinera tips. Netipizētam konteineram tā ir `Any`, neatkarīgi no tā, kāda vērtība tajā pašlaik glabājas:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

Tipizētam konteineram tā ir ierobežojuma tips:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

Metode `name` atgriež konteinera nosaukumu, ieskaitot sigilu:

```raku
my $language;
say $language.VAR.name; # $language
```

Uzmanieties, lai nesajauktu `^name` (tips) un `name` (paša mainīgā nosaukums).

{% include nav.html %}
