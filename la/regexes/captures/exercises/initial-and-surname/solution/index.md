---
title: 'Solutio: Initialis et cognomen'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 Inveni codicem fontem in archivo [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Exitus

```
Smith
```

## Commentarii

1. `$<initial>=(\w)` unum characterem verbi capit; `$<surname>=(\w+)` seriem litterarum post spatium capit.

1. Nomen gentile deinde nomine ut `$<surname>` relegitur, et praefixum `~` illud ut catenam simplicem imprimit; sine eo `say $<surname>` obiectum congruentiae ut `｢Smith｣` ostenderet.

{% include nav.html %}
