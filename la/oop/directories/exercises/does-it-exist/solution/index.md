---
title: 'Solutio: Existitne?'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 Inveni codicem fontem in archivo [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Exitus

```
False
True
```

## Commentarii

1. `.e` probat utrum semita exsistat. Prima inspectio ante archivum creatum currit, itaque `False` reddit.

1. `spurt` deinde `test.txt` creat, et secunda inspectio in *eadem* semita nunc `True` reddit. Obiectum semitae iterum interrogare statum currentem systematis archivorum reddit.

{% include nav.html %}
