---
title: 'Oplossing: Een actie in hoofdletters'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar WordG {
    token TOP  { <word> }
    token word { \w+ }
}

class UpcaseAction {
    method TOP($/) { make $<word>.Str.uc }
}

say WordG.parse('hello', actions => UpcaseAction.new).made;
```

🦋 Je kunt de broncode vinden in het bestand [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Uitvoer

```
HELLO
```

## Opmerkingen

1. De grammatica captureert het woord; de actieklasse beslist wat ermee gebeurt.

1. `$<word>.Str` geeft de gematchte tekst en `.uc` zet die in hoofdletters, en dat is wat `make` op de match bewaart.

{% include nav.html %}
