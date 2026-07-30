---
title: 'Oplossing: Keer de woordvolgorde om'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 Je kunt de broncode vinden in het bestand [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Uitvoer

```
nice really is Raku
```

## Opmerkingen

1. `.words` breekt de zin in een lijst, `.reverse` keert de volgorde van de lijst om, en
`.join(' ')` plakt de woorden met enkele spaties weer aaneen.

{% include nav.html %}
