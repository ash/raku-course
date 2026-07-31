---
title: 'Solutio: Directorium vacua'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 Inveni codicem fontem in archivo [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Exitus

```
False
```

## Commentarii

1. `rmdir` solum directoriam vacuam removet, itaque archiva prius abeunda sunt. `'cache'.IO.dir` ingressus enumerat, et `.unlink for …` unumquemque delet.

1. Directoria nunc vacua, `rmdir` eam removet. Ultima probatio `.e` `False` nuntiat, confirmans `cache` ablatam esse.

{% include nav.html %}
