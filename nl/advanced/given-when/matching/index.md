---
title: Matching op bereiken, typen en voorwaarden
translations_gpt: true
---

{% include menu.html %}

Een `when`-blok vergelijkt niet alleen op gelijkheid. Het voert een _smart match_ uit tussen het topic en de waarde die je opgeeft, zodat je kunt matchen op bereiken, typen en voorwaarden, niet alleen op enkele waarden.

## Bereiken

Een bereik matcht wanneer het topic erin valt. Dit maakt `given`/`when` een natuurlijke keuze voor het groeperen van getallen in banden:

```raku
my $score = 75;

given $score {
    when 90..100 { say 'A' }
    when 80..89  { say 'B' }
    when 70..79  { say 'C' }
    default      { say 'F' }
}
```

De waarde `75` valt in het bereik `70..79`, dus het programma drukt af:

```
C
```

## Typen

Een type matcht wanneer het topic van dat type is. Hiermee kun je vertakken op basis van wat voor soort waarde je hebt:

```raku
my $value = 'Raku';

given $value {
    when Int { say 'an integer' }
    when Str { say 'a string' }
}
```

Omdat `$value` een string bevat, drukt het programma af:

```
a string
```

## Voorwaarden

Je kunt ook direct een vergelijking gebruiken. Binnen de `when` is het topic beschikbaar als `$_`, dus een voorwaarde zoals `$_ < 0` matcht wanneer deze waar is:

```raku
my $n = -7;

given $n {
    when $_ < 0 { say 'negative' }
    when 0      { say 'zero' }
    default     { say 'positive' }
}
```

Hier matcht de eerste `when`, en het programma drukt af:

```
negative
```

{% include nav.html %}
