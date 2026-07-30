---
title: 'Solution: Standaardkorting'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $discount is default(0);
say $discount;

$discount = 15;
say $discount;
```

🦋 Je kunt de broncode vinden in het bestand [default-discount.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/default-discount.raku).

Een eenvoudigere oplossing zou natuurlijk zijn om de variabele direct te initialiseren met `0`:

```raku
my $discount = 0;
say $discount;

$discount = 15;
say $discount;
```

## Uitvoer

```
0
15
```

## Opmerkingen

1. De `is default(0)`-eigenschap geeft de container een waarde om op terug te vallen zolang er niets aan is toegewezen. Het lezen van de variabele geeft `0` terug, en in tegenstelling tot een niet-gedeclareerde standaardwaarde produceert het geen waarschuwing over een _niet-geïnitialiseerde waarde_.

1. Na de toewijzing bevat de container `15`, en de standaardwaarde speelt geen rol meer.

{% include nav.html %}
