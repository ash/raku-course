---
title: 'Solutio: Inventum an non inventum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub lookup($key) {
    fail 'no such key' if $key ne 'a';
    return 100;
}

my $r = lookup('z');
if $r.defined {
    say $r;
}
else {
    say 'not found';
    say "reason: {$r.exception.message}";
}
```

🦋 Inveni codicem fontem in archivo [lookup.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/lookup.raku).

## Exitus

```
not found
reason: no such key
```

## Commentarii

1. `lookup('z')` `fail` vocat, itaque `Failure` indefinitum reddit.

1. Quia effectus indefinitus est, programma `not found` imprimit potius quam valore defecto uti conetur.

1. `Failure` tamen exceptionem fert quae describit quid male ceciderit. `$r.exception` eam recuperat — quod etiam defectum ut tractatum notat, ita ut postea non displodat — et `.message` textum ad `fail` traditum legit, `no such key`.

{% include nav.html %}
