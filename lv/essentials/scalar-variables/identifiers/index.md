---
title: Mainīgo nosaukumi
---

{% include menu.html %}

Pirms turpinām tālāk, pavadīsim nedaudz laika interesantajā tēmā par atļautajiem mainīgo nosaukumiem. Līdz šim mēs esam redzējuši vienkāršus nosaukumus, piemēram, `$name` vai `$age`, kas pilnībā sastāvēja no mazajiem burtiem angļu alfabētā. Bet ir arī citas iespējas.

## Lielo un mazo burtu atšķirība

Mainīgo (vai _identifikatoru_) nosaukumi ir reģistrjutīgi. Tas nozīmē, ka visi zemāk minētie nosaukumi attiecas uz dažādiem skalāriem konteineriem:

```raku
$myname

$MyName

$myName

$MYNAME
```

Tas ir atkarīgs no jums, kādu nosaukumu shēmu izmantot, bet jūs varat rezervēt visus lielos burtus konstantiem.

## Citi rakstzīmes

Starp ASCII rakstzīmēm varat izmantot ciparus, apakšsvītru `_`, defisi `-` un vienpēdiņu (kas apzīmē apostrofu) `'`. Ņemiet vērā, ka pirmajai identifikatora rakstzīmei jābūt vai nu burtam, vai apakšsvītrai. Gan `-`, gan `'` jāseko alfabētiskai rakstzīmei. Šeit ir daži citi derīgi identifikatori:

```raku
$___

$a'b'c

$my-name

$address2
```

Atkal, tas ir atkarīgs no jums, kādus nosaukumus izvēlēties, bet, iespējams, nav laba prakse apzināti izvēlēties nosaukumus, kas izskatās kriptiski.

## Unicode rakstzīmes

Burtu un ciparu definīcija faktiski tiek paplašināta, lai iekļautu visas tās rakstzīmes, kas tiek uzskatītas par burtiem un decimālajiem cipariem saskaņā ar to Unicode īpašībām. Piemēram, šie mainīgie ir derīgi Raku valodā:

```raku
$привет

$駱駝道

$αβγ

$Δ۲ # kur ۲ ir cipars
```

{% include nav.html %}