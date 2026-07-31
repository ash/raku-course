---
title: 'Solutio: Constantem legere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

Programma, `read-pi.raku`:

```raku
need Circle;

say $Circle::pi;
```

🦋 Utrumque archivum fontem in directoria [exercises/advanced/modules-basics/read-the-constant](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/read-the-constant) invenies.

## Exitus

```console
$ raku -I. read-pi.raku
3.14
```

## Commentarii

1. `need Circle` modulum onerat sed nulla nomina importat, itaque nudum `$pi` non agnosceretur.

1. Variabilis `our` per nomen moduli attingitur, `$Circle::pi` scriptum.

{% include nav.html %}
