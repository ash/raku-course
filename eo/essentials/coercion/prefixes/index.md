---
title: Konverti tipojn kun prefiksaj operatoroj
---

{% include menu.html %}

Alia maniero transformi la tipon de objekto estas uzi prefiksajn operatorojn. Tiuj estas unu-karakteraj operatoroj, kiuj estas metitaj tuj antaŭ la valoro (aŭ variablo).

`~` | Ŝnura devigo
`+` | Nombra devigo
`?` | Boolea devigo

Konsideru ekzemplon de kreado de Boolea valoro el entjero:

```raku
say ?42; # Vera
```

Konverti al ŝnuro estas simila:

```raku
my $n = -30;
my $s = ~$n;
say $s.chars; # 3, ĉar "-30" havas 3 karakterojn
```

Notu, ke kun nombra konvertiĝo, la tipo de la konvertita valoro malsamas depende de la nombro en demando. Komparu la sekvajn konvertiĝojn el ŝnuroj:

```raku
say (+'100').WHAT;   # (Int)
say (+'3.14').WHAT;  # (Rat)
say (+'27E-1').WHAT; # (Num)
```

Por Booleaj konvertiĝoj, estas alia rutino nomata `so`. Vi povas uzi ĝin kiel prefiksan operatoron aŭ kiel metodon:

```raku
my $value = 42;
say so $value; # Vera
say $value.so; # Vera
```

{% include nav.html %}