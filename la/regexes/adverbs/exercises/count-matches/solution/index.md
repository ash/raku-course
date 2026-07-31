---
title: 'Solutio: Congruentias numera'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say ('education' ~~ m:g/<[aeiou]>/).elems;
```

🦋 Inveni codicem fontem in archivo [count-matches.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/count-matches.raku).

## Exitus

```
5
```

## Commentarii

1. Classis characterum `<[aeiou]>` unam vocalem congruit, et adverbium `:g` omnem talem congruentiam loco primae solius reddit.

1. Effectus ut series se gerit, itaque `.elems` congruentias numerat: quinque vocales in `education` (e, u, a, i, o).

{% include nav.html %}
