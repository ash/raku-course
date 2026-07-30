---
title: 'Oplossing: Titelnotatie'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 Je kunt de broncode vinden in het bestand [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Uitvoer

```
The Lord Of The Rings
```

## Opmerkingen

1. `.tc` ("title-case") maakt de eerste letter van een string een hoofdletter. De hyper-
operator `>>.tc` past haar in één keer op elk woord toe, en `.join(' ')` zet
de zin weer in elkaar.

{% include nav.html %}
