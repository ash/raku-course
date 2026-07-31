---
title: 'Solutio: Tracta et perge'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
for <ok bad ok> -> $item {
    {
        die 'boom' if $item eq 'bad';
        say "processed $item";

        CATCH {
            default {
                say "skipped ($item): {.message}";
            }
        }
    }
}
```

🦋 Inveni codicem fontem in archivo [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Exitus

```
processed ok
skipped (bad): boom
processed ok
```

## Commentarii

1. Fasis `CATCH` intra clausulam uniuscuiusque elementi est, itaque `die` pro illo uno elemento tantum tractat. Quia exceptio ibi tractatur, numquam effugit ut totum anulum sistat.

1. Hic est usus typicus `CATCH` prae `try`: defectus in una iteratione localiter tractatur, et anulus ad elementum sequens movetur. Elementum medium deficit, sed duo elementa `ok` adhuc tractantur.

{% include nav.html %}
