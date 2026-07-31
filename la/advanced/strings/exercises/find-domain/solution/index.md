---
title: 'Solutio: Pars dominii'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
my $email = 'user@example.com';

my $at = $email.index('@');
say $email.substr($at + 1);
```

🦋 Inveni codicem fontem in archivo [find-domain.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/find-domain.raku).

## Exitus

```
example.com
```

## Commentarii

1. `index('@')` reddit `4` — positionem signi `@` a nulla numeratam.

1. `substr($at + 1)` unum characterem post `@` incipit et, sine longitudine data, ad finem chordae currit, reddens `example.com`.

{% include nav.html %}
