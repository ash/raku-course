---
title: Oplossing voor 'Hallo, Concatenatie!'
---

{% include menu.html %}

## Code

Hier is een mogelijke oplossing voor dit probleem:

```raku
my $name = prompt 'Wat is je naam? ';
say 'Hallo, ' ~ $name ~ '!';
```

🦋 Je kunt de broncode vinden in het bestand [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-concatenation.raku).

## Output

Voer het programma uit, en het zal in een modus gaan waarin het wacht op je invoer. Nadat je de naam hebt getypt en op Enter hebt gedrukt, gaat het programma verder en print de begroeting:

```console
$ raku exercises/strings/hello-concatenation.raku
Wat is je naam? John
Hallo, John!
```

## Opmerkingen

Vergelijk het programma met [de vorige variant](../../../../scalar-variables/exercises/greet-a-person/solution) waar we drie strings doorgaven aan de `say` routine:

```raku
say 'Hallo, ', $name, '!';
```

Deze keer worden de drie delen eerst geconcateneerd en vervolgens als een enkele string doorgegeven aan `say`.

{% include nav.html %}