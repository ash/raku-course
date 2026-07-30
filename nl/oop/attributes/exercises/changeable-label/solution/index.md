---
title: 'Oplossing: Een wijzigbaar label'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Label {
    has $.text is rw;
}

my $l = Label.new(text => 'draft');
$l.text ~= ' (revised)';
say $l.text;
```

🦋 Je kunt de broncode vinden in het bestand [changeable-label.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/changeable-label.raku).

## Uitvoer

```
draft (revised)
```

## Opmerkingen

1. De trait `is rw` laat de accessor een schrijfbare container teruggeven, zodat die links van een toekenning kan staan.

1. Omdat hij schrijfbaar is, werkt de samengestelde operator `~=` er ook op: `$l.text ~= ' (revised)'` leest de huidige tekst, plakt het achtervoegsel eraan en slaat het resultaat weer op — allemaal via dezelfde accessor.

{% include nav.html %}
