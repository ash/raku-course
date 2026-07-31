---
title: 'Solutio: Litteras numera'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
spurt 'data.txt', 'Raku';

say slurp('data.txt').chars;
```

🦋 Inveni codicem fontem in archivo [count-characters.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/count-characters.raku).

## Exitus

```
4
```

## Commentarii

1. `spurt` chordam `Raku` in archivum scribit.

1. `slurp` eam retro ut chordam legit, et `.chars` characteres eius numerat — quattuor.

1. Si archivum inspicis, revera solos quattuor characteres videbis; character novae lineae non additur.

{% include nav.html %}
