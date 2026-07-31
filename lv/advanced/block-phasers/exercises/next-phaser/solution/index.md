---
title: 'Risinājums: Pēc katra soļa'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 Atrodiet programmu failā [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Izvade

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Komentāri

1. Fāzeris `NEXT` ir uzrakstīts pirmais, taču izpildās katras iterācijas *beigās* — pēc tam, kad ķermenis pašreizējo skaitli jau pieskaitījis `$sum`.

1. Tātad pēc pirmā piegājiena `$sum` ir `1`, pēc otrā — `3`, un pēc trešā — `6`. `NEXT` ir cikla atbilsme tam, lai kaut ko izpildītu starp iterācijām; tas atšķiras no `FIRST` (vienreiz sākumā) un `LAST` (vienreiz beigās).

{% include nav.html %}
