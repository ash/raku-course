---
title: 'Solutio: Lineas computa'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
spurt 'data.txt', "a\nb\nc\nd\n";

say 'data.txt'.IO.lines.elems;
```

🦋 Inveni codicem fontem in archivo [count-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/count-lines.raku).

## Exitus

```
4
```

## Commentarii

1. `.IO.lines` lineas archivi ut seriem reddit.

1. `.elems` eas numerat, dans `4`.

{% include nav.html %}
