---
title: 'Risinājums: Garie gadi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
for 2000, 1900, 2024, 2023 -> $year {
    my $leap = $year %% 400 || ($year %% 4 && !($year %% 100));

    say "$year: { $leap ?? 'leap' !! 'common' }";
}
```

🦋 Atrodiet programmu failā [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/leap-year.raku).

## Izvade

```
2000: leap
1900: common
2024: leap
2023: common
```

## Komentāri

1. Likums tieši lasās kā Būla izteiksme: garais gads ir tāds, kas dalās ar
400, *vai* kas dalās ar 4, bet ne ar 100. `%%` ir dalāmības pārbaude.

1. `1900` dalās ar 100, bet ne ar 400, tāpēc tas ir parasts; `2000` dalās ar
400, tāpēc tas ir garais.

1. Raku tips [`Date`](/lv/advanced/date-and-time) šo likumu jau zina. Tas to piedāvā
kā `.is-leap-year` — metodi *datuma objektam*, tāpēc jūs izveidojat jebkuru gada
datumu (šeit 1. janvāri) un jautājat tam:

    ```raku
    for 2000, 1900, 2024, 2023 -> $year {
        my $leap = Date.new($year, 1, 1).is-leap-year;
        say "$year: { $leap ?? 'leap' !! 'common' }";
    }
    ```

    Vingrinājums, protams, ir par to, lai likumu uzrakstītu pats.

{% include nav.html %}
