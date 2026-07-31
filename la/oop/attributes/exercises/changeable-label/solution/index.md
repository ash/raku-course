---
title: 'Solutio: Titulus mutabilis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Label {
    has $.text is rw;
}

my $l = Label.new(text => 'draft');
$l.text ~= ' (revised)';
say $l.text;
```

🦋 Inveni codicem fontem in archivo [changeable-label.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/changeable-label.raku).

## Exitus

```
draft (revised)
```

## Commentarii

1. Proprietas `is rw` accessorem receptaculum scribendum reddere facit, itaque in parte sinistra assignationis apparere potest.

1. Quia scribendus est, operator compositus `~=` quoque in eo operatur: `$l.text ~= ' (revised)'` textum currentem legit, suffixum coniungit, et effectum retro servat — omnia per eundem accessorem.

{% include nav.html %}
