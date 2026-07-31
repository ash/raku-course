---
title: 'Solutio: Sectio Pod'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius muneris.

## Codex

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod

say $=pod[0].contents.elems;
```

🦋 Fontem codicis in fasciculo [a-pod-section.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/a-pod-section.raku) invenire potes.

## Exitus

```
2
```

## Commentarii

1. `$=pod` Pod fasciculi ut indicem truncorum continet; `$=pod[0]` est unicus truncus `=begin pod`.

1. Eius `.contents` sunt trunci intus nidificati — titulus `=head1` et paragraphus — itaque `.contents.elems` est `2`. Sic in structuram descendere est modus quo programma suam documentationem ut data legit.

{% include nav.html %}
