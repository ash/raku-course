---
title: 'Solutio: Ordinem verborum inverte'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 Inveni codicem fontem in archivo [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Exitus

```
nice really is Raku
```

## Commentarii

1. `.words` sententiam in indicem frangit, `.reverse` ordinem indicis invertit, et
`.join(' ')` verba singulis spatiis rursus conglutinat.

{% include nav.html %}
