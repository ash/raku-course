---
title: 'Solutio: Nomen plenum analysa'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 Inveni codicem fontem in archivo [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Exitus

```
｢Hopper｣
```

## Commentarii

1. `TOP` totum nomen describit; `first` et `last` partes eius describunt, cum spatio litterali inter ea.

1. Post analysin unaquaeque tessera captura nominata est, itaque nomen gentile ut `<last>` in obiecto congruentiae legitur.

{% include nav.html %}
