---
title: 'Solutio: Plura exspecta'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 Inveni codicem fontem in archivo [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Exitus

```
(APPLE PEAR PLUM)
```

## Commentarii

1. `@words.map(-> $w { start { $w.uc } })` unumquodque verbum in proprium promissum vertit, ita ut omnia tria simul in maiusculas vertantur. Blocus acutus verbum `$w` nominat, itaque omne promissum rectum capit.

1. `await @jobs` totum indicem exspectat et effectus ordine originali reddit, dans `(APPLE PEAR PLUM)`.

{% include nav.html %}
