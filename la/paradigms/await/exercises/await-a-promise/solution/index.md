---
title: 'Solutio: Promissum exspecta'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 Inveni codicem fontem in archivo [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Exitus

```
(slow quick medium)
```

## Commentarii

1. Omnia tria negotia simul incipiunt et simul dormiunt, itaque totum programma circiter `0.3` secunda sumit — durationem negotii tardissimi, non summam omnium trium.

1. Quamquam `quick` primum finit et `slow` ultimum, exitus est `(slow quick medium)`: `await` unumquemque effectum eodem loco reddit quo promissum eius in `@jobs`. Ordo perficiendi solum illud afficit *quando* `await` redeat, numquam dispositionem effectuum.

{% include nav.html %}
