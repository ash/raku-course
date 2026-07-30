---
title: 'Oplossing: Vervuld of verbroken'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 Je kunt de broncode vinden in het bestand [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Uitvoer

```
Kept
```

## Opmerkingen

1. Nadat het blok met succes klaar is, is de promise _vervuld_.

1. `.status` meldt dat als `Kept`. Had het blok een exceptie geworpen, dan zou de status `Broken` zijn.

{% include nav.html %}
