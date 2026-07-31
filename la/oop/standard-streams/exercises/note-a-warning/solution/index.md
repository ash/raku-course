---
title: 'Solutio: Monitum per `note`'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 Inveni codicem fontem in archivo [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Exitus

```
Warning: the value is negative
3
```

## Commentarii

1. `note` monitum ad errorem vulgarem mittit, et solum cum valor revera negativus est. `say` verum effectum — valorem absolutum `3` — ad exitum vulgarem mittit.

1. Diagnosticum in errore vulgari servare significat illud verum programmatis exitum non inquinare: errorem vulgarem per `2>/dev/null` abiciens solum `3` relinquis.

{% include nav.html %}
