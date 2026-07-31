---
title: 'Solutio: Cognomen primum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
if 'Grace Hopper' ~~ / (\w+) ' ' (\w+) / {
    say "$1, $0";
}
```

🦋 Inveni codicem fontem in archivo [swap-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/swap-words.raku).

## Exitus

```
Hopper, Grace
```

## Commentarii

1. Praenomen et nomen gentile in `$0` et `$1` capiuntur.

1. Intra catenam duplicibus virgulis clausam unaquaeque captura ut textus congruens interpolatur. `"$1, $0"` imprimens nomen gentile primum ponis, quod comma litterale et spatium sequuntur, deinde praenomen.

{% include nav.html %}
