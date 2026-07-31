---
title: 'Risinājums: Maināma etiķete'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Label {
    has $.text is rw;
}

my $l = Label.new(text => 'draft');
$l.text ~= ' (revised)';
say $l.text;
```

🦋 Atrodiet programmu failā [changeable-label.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/changeable-label.raku).

## Izvade

```
draft (revised)
```

## Komentāri

1. Iezīme `is rw` liek piekļuves metodei atgriezt rakstāmu konteineru, tāpēc tā var parādīties piešķīruma kreisajā pusē.

1. Tā kā tā ir rakstāma, uz tās darbojas arī saliktais operators `~=`: `$l.text ~= ' (revised)'` nolasa pašreizējo tekstu, pievieno galotni un ieraksta rezultātu atpakaļ — un tas viss caur to pašu piekļuves metodi.

{% include nav.html %}
