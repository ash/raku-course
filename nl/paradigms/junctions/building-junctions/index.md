---
title: Juncties bouwen
translations_gpt:
---

{% include menu.html %}

De eenvoudigste manier om een junctie te bouwen is met de junctieve operatoren. De operator `|` maakt een _any_-junctie:

```raku
my $j = 1 | 2 | 3;
say $j; # any(1, 2, 3)
```

De waarde `$j` staat voor "1 of 2 of 3". Er zijn vier soorten juncties, elk met een operator en een bijpassende functie:

* `any( … )` of `a | b` — waar als **een willekeurige** waarde matcht
* `all( … )` of `a & b` — waar als **alle** waarden matchen
* `one( … )` of `a ^ b` — waar als **precies één** waarde matcht
* `none( … )` — waar als **geen enkele** waarde matcht (dit is de enige soort zonder operatorvorm — gebruik de functie)

De functievormen zijn handig bij een lijst:

```raku
say all(3, 7, 2);  # all(3, 7, 2)
say none(1, 2, 3); # none(1, 2, 3)
```

Een junctie is het nuttigst in een vergelijking. Vragen of een getal gelijk is aan een _any_-junctie test het in één keer tegen elke waarde:

```raku
say so 2 == any(1, 2, 3); # True
say so 5 == any(1, 2, 3); # False
```

De operatorvorm leest net zo natuurlijk — `1 | 2 | 3` is precies dezelfde _any_-junctie:

```raku
say so 2 == 1 | 2 | 3; # True
say so 5 == 1 | 2 | 3; # False
```

De `so` maakt van het junctieve resultaat een simpele boolean. Het volgende onderwerp bekijkt wat er achter de schermen gebeurt wanneer je dit doet.

{% include nav.html %}
