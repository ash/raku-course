---
title: 'Solutio: Defectum exspecta'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $p = start { die 'boom' };

try {
    await $p;
    CATCH {
        default { say "caught: {.message}" }
    }
}
```

🦋 Inveni codicem fontem in archivo [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Exitus

```
caught: boom
```

## Commentarii

1. Blocus promissi iacit, itaque promissum *fractum* est. Exceptio non perit — tenetur donec quis promissum exspectet.

1. `await $p` illam ibidem rursus iacit, ubi phaser `CATCH` eam ut quamlibet exceptionem ordinariam tractat. Hoc est quomodo errores in opere fundi ibi emergant ubi effectum exspectas.

{% include nav.html %}
