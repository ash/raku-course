---
title: 'Solutio: Servatum an fractum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $p = start { 10 };
await $p;
say $p.status;
```

🦋 Inveni codicem fontem in archivo [kept-or-broken.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/kept-or-broken.raku).

## Exitus

```
Kept
```

## Commentarii

1. Postquam blocus feliciter finivit, promissum _servatum_ est.

1. `.status` hoc ut `Kept` nuntiat. Si blocus exceptionem iecisset, status `Broken` esset.

{% include nav.html %}
