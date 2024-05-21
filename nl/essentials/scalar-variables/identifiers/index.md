---
title: Variabelnamen
---

{% include menu.html %}

Voordat we verder gaan, laten we wat tijd besteden aan een interessant onderwerp: de toegestane namen van variabelen. Tot nu toe hebben we eenvoudige namen gezien zoals `$name` of `$age`, die volledig bestonden uit kleine letters van het Engelse alfabet. Maar er zijn meer mogelijkheden.

## Hoofdlettergevoeligheid

Namen van de variabelen (of _identifiers_) zijn hoofdlettergevoelig. Dat betekent dat al de onderstaande namen verwijzen naar verschillende scalair containers:

```raku
$myname

$MyName

$myName

$MYNAME
```

Het is aan jou om je aan een naamgevingsschema te houden, maar je kunt waarschijnlijk de volledig hoofdletter namen reserveren voor constanten.

## Andere tekens

Onder de ASCII-tekens kun je cijfers, het onderstrepingsteken `_`, een koppelteken `-`, en een enkele aanhalingsteken (dat staat voor apostrof) `'` gebruiken. Let op dat het eerste teken van de identifier een letter of een onderstrepingsteken moet zijn. Zowel `-` als `'` moeten gevolgd worden door een alfabetisch teken. Hier zijn nog een paar geldige identifiers:

```raku
$___

$a'b'c

$my-name

$address2
```

Nogmaals, het is aan jou om de namen te kiezen, maar het is waarschijnlijk geen goede praktijk om opzettelijk namen te kiezen die cryptisch lijken.

## Unicode tekens

De definitie van letters en cijfers is eigenlijk uitgebreid om al die tekens te omvatten die worden beschouwd als letters en decimale cijfers volgens hun Unicode-eigenschappen. Bijvoorbeeld, de volgende variabelen zijn geldig in Raku:

```raku
$привет

$駱駝道

$αβγ

$Δ۲ # waarbij ۲ een cijfer is
```

{% include nav.html %}