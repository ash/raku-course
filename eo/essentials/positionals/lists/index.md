---
title: Listoj
---

{% include menu.html %}

Listoj estas similaj al tabeloj sed estas nemodifikeblaj. Ne eblas ŝanĝi la grandecon aŭ la elementojn de listo. Uzu krampojn por krei liston:

```raku
my $odd = (1, 3, 5, 7, 9);
```

## Subskribi listojn

Por aliri individuajn elementojn de listo, uzu kvadratajn krampojn kun la indekso:

```raku
say $odd[3]; # 7
```

Tamen, ne eblas agordi novan valoron:

```raku
$odd[3] = 8; # Ne OK
```

Tia provo kaŭzas escepton:

    Ne eblas modifi nemodifikeblan Liston ((1 3 5 7 9))
      en bloko <unit> ĉe t.raku linio 4

## Asigni liston al tabelo

Kio okazas kiam vi konservas liston en variablo kun la `@` sigelo?

```raku
my @data = (40, 42, 44);
```

En ĉi tiu kazo, la variablo `@data` enhavas tabelon, kaj vi povas modifi ĝiajn elementojn.

%%tipblock
## Variablo vs listo

Notu, ke la fakto ke listoj estas nemodifikeblaj ne signifas ke vi ne povas reuzi la variablon kiu tenas ĝin.

```raku
my $elements = (1, 2);
say $elements[0]; # 1

$elements = (3, 4);
say $elements[0]; # 3
```

%%/tipblock

{% include nav.html %}