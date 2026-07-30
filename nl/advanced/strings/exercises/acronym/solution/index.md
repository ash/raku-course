---
title: 'Oplossing: Acroniem'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 Je kunt de broncode vinden in het bestand [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Uitvoer

```
HTML
```

## Opmerkingen

1. `$phrase.words` geeft de lijst met woorden. De lus neemt van elk woord het eerste teken met `substr(0, 1)` en plakt dat achter `$acronym`.

1. Zodra alle beginletters verzameld zijn, maakt `uc` er hoofdletters van: `HTML`.

{% include nav.html %}
