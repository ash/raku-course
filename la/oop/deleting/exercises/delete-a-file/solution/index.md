---
title: 'Solutio: Plicam dele'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 Inveni codicem fontem in archivo [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Exitus

```
True
False
```

## Commentarii

1. `spurt` archivum creat, itaque prima probatio `.e` `True` nuntiat.

1. `unlink` illud delet. Secunda probatio `.e` deinde `False` nuntiat, quia archivum ablatum est. Nota usum `.e` potius quam `.f`: probatio generis `.f` in semita quae non iam exsistit iaceret, dum `.e` simpliciter `False` respondet.

{% include nav.html %}
