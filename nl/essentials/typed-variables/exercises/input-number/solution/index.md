---
title: Oplossing van 'Gebruikersinvoer omzetten naar een nummer'
---

{% include menu.html %}

Het programma kan zo eenvoudig zijn als dit:

## Code

```raku
my Int $n = prompt 'Enter a number: ';
say $n;
```

🦋 Je kunt de broncode vinden in het bestand [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/input-number.raku).

## Voorbeeld

Voer het uit en voer een geheel getal in, positief of negatief:

```console
$ raku exercises/typed-variables/input-number.raku
Enter a number: -42
-42
```

## Opmerkingen

Zoals we [gezien hebben](/nl/essentials/typed-variables/allomorphs), is de retourwaarde van `prompt` een `IntStr`, die zonder dwang kan worden toegewezen aan een `Int` variabele.

Merk echter op dat het programma zal worden beëindigd met een uitzondering als je een string invoert die niet kan worden omgezet naar een geheel getal.

{% include nav.html %}