---
title: Pāri
---

{% include menu.html %}

Pāris ir datu struktūra, kas saglabā vārdu un vērtību. Tie veido cietu objektu, kuru var glabāt skalārā mainīgajā. Šeit ir piemērs, kā izveidot pāri:

```raku
my $pair = name => 'Anna';
```

Mainīgā `$pair` tips ir `Pair`:

```raku
say $pair.WHAT; # (Pair)
```

Ir iespējams piekļūt vārdam un vērtībai atsevišķi, izmantojot atbilstošās metodes `key` un `value`:

```raku
say $pair.key; # name
say $pair.value; # Anna
```

Svarīga pāru īpašība ir tā, ka tie ir nemainīgi objekti. Tas nozīmē, ka nevar piešķirt jaunu vērtību vai dot jaunu vārdu esošam pārim. Bet, protams, var piešķirt pilnīgi jaunu pāri tam pašam mainīgajam:

```raku
my $pair = name => 'Anna';
$pair = name => 'John';
say $pair.value; # John
```

## Indeksēšana

Ir vēl viena metode, kā nolasīt pāra vērtību. Varat to indeksēt ar tā atslēgas nosaukumu leņķa iekavās. Lūk, kā to izdarīt:

```raku
say $pair<name>;
```

Pamaniet, ka nav nepieciešams citēt atslēgas nosaukumu, ja tajā nav atstarpju. Ja tās ir, lietas kļūst nedaudz stingrākas:

```raku
my $pair = 'employee name' => 'Julie Madelon';
say $pair{'employee name'};
```

Nepalaidiet garām faktu, ka šoreiz tiek izmantotas līkās iekavas.

{% include nav.html %}