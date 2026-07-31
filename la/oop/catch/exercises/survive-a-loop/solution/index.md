---
title: 'Solutio: Iterationem supervive'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
for 1, 2, 3 -> $n {
    if $n == 2 {
        die "bad: $n";
    }
    say "ok: $n";

    CATCH {
        default {
            say "caught: " ~ .message;
        }
    }
}
```

🦋 Inveni codicem fontem in archivo [survive-a-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/survive-a-loop.raku).

## Exitus

```
ok: 1
caught: bad: 2
ok: 3
```

## Commentarii

1. Fasis `CATCH` exceptionem intra corpus anuli iactam tractat, itaque `die` in iteratione secunda capitur potius quam fatale sit.

1. Postquam exceptio tractata est, anulus simpliciter cum valore sequenti pergit, quapropter `ok: 3` adhuc imprimitur.

{% include nav.html %}
