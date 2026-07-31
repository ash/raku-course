---
title: 'Solutio: Nuntio praefixum adde'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
{
    die 'timeout';

    CATCH {
        default {
            say 'Error: ' ~ .message;
        }
    }
}
```

🦋 Inveni codicem fontem in archivo [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Exitus

```
Error: timeout
```

## Commentarii

1. `.message` obiecti exceptionis textum ad `die` traditum dat.

1. Illum post `Error: ` coniungens lineam finalem aedificas. Obiectum exceptionis merus valor est, itaque nuntio eius uti potes quomodocumque vis.

{% include nav.html %}
