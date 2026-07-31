---
title: 'Solutio: Acronymum'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
my $phrase = 'hyper text markup language';

my $acronym = '';
for $phrase.words -> $word {
    $acronym ~= $word.substr(0, 1);
}

say $acronym.uc;
```

🦋 Inveni codicem fontem in archivo [acronym.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/acronym.raku).

## Exitus

```
HTML
```

## Commentarii

1. `$phrase.words` indicem verborum dat. Cyclus primum characterem cuiusque verbi cum `substr(0, 1)` sumit et ad `$acronym` addit.

1. Postquam omnia initialia collecta sunt, `uc` eventum in litteras maiores convertit: `HTML`.

{% include nav.html %}
