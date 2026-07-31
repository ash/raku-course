---
title: 'Solutio: Genus congrue'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
{
    my $x = 1 / 0;
    say $x;

    CATCH {
        when X::Numeric::DivideByZero {
            say 'cannot divide by zero';
        }
    }
}
```

🦋 Inveni codicem fontem in archivo [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Exitus

```
cannot divide by zero
```

## Commentarii

1. In Raku `1 / 0` statim non displodit; `Failure` pigrum producit. Exceptio iacitur solum cum valore *utimur*, hic eum `say` conando.

1. Exceptio iacta generis inbuilti `X::Numeric::DivideByZero` est, et `when X::Numeric::DivideByZero` ei accurate convenit. In certo genere comparare, potius quam omnia per `default` capere, tibi permittit diversos errores diverse tractare.

{% include nav.html %}
