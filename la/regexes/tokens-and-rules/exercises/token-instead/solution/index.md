---
title: 'Solutio: regex contra token'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my regex r { \d+ '5' }
my token t { \d+ '5' }

say so '12345' ~~ / <r> /;
say so '12345' ~~ / <t> /;
```

🦋 Inveni codicem fontem in archivo [token-instead.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/token-instead.raku).

## Exitus

```
True
False
```

## Commentarii

1. In `regex` `\d+` primum totum `12345` rapit, deinde **retro cedit** — ultimam `5` reddens ut litterale `5` congruere possit. Itaque regex succedit.

1. `token` nihil reddere recusat: `\d+` totum `12345` servat, litterale `5` nihil reliquum invenit, et tessera deficit. Haec agendi ratio sine regressione est exacte ratio cur `token` electio recta intra grammaticas sit.

{% include nav.html %}
