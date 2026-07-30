---
title: 'Solution: Verzamelen tot vol'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $sum = 0;
my @result = gather for 1..100 {
    $sum += $_;
    last if $sum > 10;
    take $_;
}

say @result;
```

🦋 Je kunt de broncode vinden in het bestand [gather-big.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/gather-big.raku).

## Uitvoer

```
[1 2 3 4]
```

## Opmerkingen

1. De lus krijgt een bereik van honderd getallen, veel meer dan hij zal gebruiken. Dat is geen probleem, want de lus stopt zichzelf: zodra `$sum` boven `10` komt, breekt `last` de lus af en worden de overige getallen nooit bezocht.

1. De volgorde binnen het blok is belangrijk. We tellen eerst op bij `$sum` en controleren de limiet voordat we nemen, dus het getal dat het totaal boven `10` brengt (hier `5`) wordt niet verzameld. Het lopend totaal bereikt precies `10` na `4`, dus de verzamelde lijst is `1, 2, 3, 4`.

1. Dit vroegtijdig stoppen met `for` is wat `gather`/`take` kan en `grep` niet: `grep` doorloopt altijd de hele lijst, terwijl we hier kiezen wanneer we stoppen.

{% include nav.html %}
