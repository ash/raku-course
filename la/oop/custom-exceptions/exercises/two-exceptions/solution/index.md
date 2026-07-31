---
title: 'Solutio: Duo genera exceptionum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class TooSmall is Exception {
    method message { 'too small' }
}

class TooBig is Exception {
    method message { 'too big' }
}

for TooSmall, TooBig -> $type {
    {
        $type.new.throw;

        CATCH {
            when TooSmall { say 'small' }
            when TooBig   { say 'big' }
        }
    }
}
```

🦋 Inveni codicem fontem in archivo [two-exceptions.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/two-exceptions.raku).

## Exitus

```
small
big
```

## Commentarii

1. Anulus `TooSmall` in primo transitu et `TooBig` in secundo iacit, utramque intra propriam clausulam cum proprio `CATCH`.

1. Fasis `CATCH` ramum `when` pro unoquoque genere exceptionis habet. In unoquoque transitu solus ramus generi iacto conveniens currit — itaque primus transitus `small` imprimit et secundus `big`. Sic una series tractatorum ad diversa errorum genera diverse reagit.

{% include nav.html %}
