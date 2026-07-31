---
title: 'Solutio: Errorem cape'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $ok = try { 6 * 7 };
say $ok;

my $bad = try { die 'broken' };
say $bad.defined;
say $!.message;
```

🦋 Inveni codicem fontem in archivo [catch-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/catch-the-error.raku).

## Exitus

```
42
False
broken
```

## Commentarii

1. Cum clausula sine errore currit, `try` simpliciter valorem clausulae reddit, itaque `$ok` `42` continet.

1. `die` intra clausulam alteram exceptionem iacit, itaque illa clausula valorem indefinitum reddit et `$bad.defined` est `False`.

1. Exceptio capta in variabili speciali `$!` servatur, et `$!.message` textum ei datum reddit, `broken`.

{% include nav.html %}
