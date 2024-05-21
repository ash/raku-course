---
title: Oplossing voor 'Hallo, Interpolatie!'
---

{% include menu.html %}

## Code

Hier is een mogelijke oplossing voor dit probleem:

```raku
my $name = prompt 'Wat is je naam? ';
say "Hallo, $name!";
```

🦋 Je kunt de broncode vinden in het bestand [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-interpolation.raku).

## Uitvoer

Voer het programma uit, en het zal in een modus gaan waarin het wacht op je invoer. Nadat je de naam hebt getypt en op Enter hebt gedrukt, gaat het programma verder en drukt de begroeting af:

```console
$ raku exercises/strings/hello-concatenation.raku
Wat is je naam? Raku
Hallo, Raku!
```

## Opmerkingen

Merk op dat deze keer de string dubbel is geciteerd. In dubbele aanhalingstekens worden variabelen geïnterpoleerd, zodat hun inhoud in de string wordt geplaatst.

{% include nav.html %}