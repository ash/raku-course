---
title: 'Solutio: Plica an directorium?'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 Inveni codicem fontem in archivo [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Exitus

```
True
False
```

## Commentarii

1. `.f` archivum ordinarium probat, itaque pro `a.txt` `True` reddit.

1. `.d` directoriam probat. De eadem ipsa semita interrogata, `False` reddit, quia `a.txt` archivum est, non directoria. Duae probationes se complent, quo modo archivum et directoriam discernis.

{% include nav.html %}
