---
title: Nomoj de variabloj
---

{% include menu.html %}

Antaŭ ol ni plu moviĝas, ni pasigu iom da tempo pri interesa temo de la permesitaj nomoj de variabloj. Ĝis nun ni vidis simplajn nomojn kiel `$name` aŭ `$age`, kiuj plene konsistis el minuskloj de la angla alfabeto. Sed estas pli da eblecoj.

## Sentemo al majuskloj kaj minuskloj

Nomoj de la variabloj (aŭ _identigiloj_) estas sentemaj al majuskloj kaj minuskloj. Tio signifas, ke ĉiuj subaj nomoj rilatas al malsamaj skalaj ujoj:

```raku
$myname

$MyName

$myName

$MYNAME
```

Estas via decido sekvi nomigan skemon, sed vi probable povas rezervi la tut-majusklojn por konstantaj valoroj.

## Aliaj signoj

Inter la ASCII-signoj, vi povas uzi ciferojn, substrekan signon `_`, strekon `-`, kaj unuopan citilon (kiu signifas apostrofon) `'`. Notu, ke la unua signo de la identigilo devas esti aŭ litero aŭ substreko. Ambaŭ `-` kaj `'` devas esti sekvataj de alfabeta signo. Jen kelkaj pliaj validaj identigiloj:

```raku
$___

$a'b'c

$my-name

$address2
```

Denove, estas via decido elekti la nomojn, sed probable ne estas bona praktiko intence elekti nomojn, kiuj aspektas kriptaj.

## Unikodaj signoj

La difino de literoj kaj ciferoj estas fakte pligrandigita por inkluzivi ĉiujn tiujn signojn, kiuj estas konsiderataj literoj kaj decimalaj ciferoj laŭ iliaj Unikodaj ecoj. Ekzemple, la sekvaj variabloj estas validaj en Raku:

```raku
$привет

$駱駝道

$αβγ

$Δ۲ # kie ۲ estas cifero
```

{% include nav.html %}