---
title: 'Risinājums: Augošās summas'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @numbers = 2, 4, 6, 8;

my $sum = 0;
my @totals = @numbers.map({ $sum += $_ });

say @totals;
```

🦋 Atrodiet programmu failā [running-totals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/running-totals.raku).

## Izvade

```
[2 6 12 20]
```

## Komentāri

1. Bloks augošo summu `$sum` glabā mainīgajā ārpus `map`. Katrs izsaukums pieskaita
pašreizējo elementu un atgriež jauno summu, tāpēc attēlotais saraksts ir
daļsummu virkne.

1. Raku tas ir iebūvēts. [Trijstūrveida redukcija](/lv/advanced/metaoperators/reduction)
`[\+]` patur katru daļsummu, tāpēc viss risinājums ir viena izteiksme:

    ```raku
    my @numbers = 2, 4, 6, 8;
    say [\+] @numbers; # (2 6 12 20)
    ```

    Tā atgriež `Seq`, tāpēc tās attēlojumā ir apaļās iekavas — `(2 6 12 20)` —,
    nevis masīva `[2 6 12 20]`, bet skaitļi ir tie paši.

{% include nav.html %}
