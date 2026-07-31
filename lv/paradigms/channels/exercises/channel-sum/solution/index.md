---
title: 'Risinājums: Saskaitiet kanālu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $c = Channel.new;

my $producer = start {
    $c.send($_) for 1..6;
    $c.close;
};

my $consumer = start {
    [+] $c.list;
};

my ($sent, $sum) = await $producer, $consumer;
say $sum;
```

🦋 Atrodiet programmu failā [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Izvade

```
21
```

## Komentāri

1. Ražotāja solījums vienā pavedienā nosūta sešas vērtības un aizver kanālu. Patērētāja solījums citā pavedienā ar `.list` savāc visu līdz aizvēršanai un atgriež summu (`[+]` saskaita `1 + 2 + … + 6`).

1. `await $producer, $consumer` sagaida **abus** solījumus un atgriež to rezultātus pēc kārtas. Ražotāja rezultāts šeit nav vajadzīgs (`$sent`); patērētāja rezultāts ir summa `21`. Tieši kanāls ir tas, kas vērtības droši pārnes no ražotāja pavediena uz patērētāja pavedienu.

{% include nav.html %}
