---
title: 'Solutio: Admonitionem silere'
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 Inveni codicem fontem in archivo [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Exitus

```
Hello, !
```

## Commentarii

1. Indefinitum `$name` in chordam interpolari normaliter admonitionem "use of uninitialized value" excitat. Expressionem in `quietly` involvere eam supprimit, ergo tantum salutatio imprimitur.

1. Sicut `do`, `quietly` valorem copiae suae reddit, ergo chorda composita (cum nomine absente lacunam vacuam relinquente) in `$greeting` reponitur.

1. `quietly` tantum admonitionem celat — valor adhuc indefinitus est. Si potius vis valorem absentem *tractare*, defectum cum operatore definito-vel `//` praebe: `$name // 'friend'` producit `'friend'` cum `$name` indefinitus est, ergo `"Hello, " ~ ($name // 'friend') ~ "!"` imprimit `Hello, friend!` sine ulla admonitione.

{% include nav.html %}
