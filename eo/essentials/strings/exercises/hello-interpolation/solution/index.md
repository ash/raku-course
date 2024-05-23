---
title: Solvo al 'Saluton, Interpolado!'
---

{% include menu.html %}

## Kodo

Jen ebla solvo al ĉi tiu problemo:

```raku
my $name = prompt 'Kio estas via nomo? ';
say "Saluton, $name!";
```

🦋 Vi povas trovi la fontkodon en la dosiero [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-interpolation.raku).

## Eligo

Rulu la programon, kaj ĝi eniros reĝimon kiam ĝi atendas vian enigon. Post kiam vi tajpas la nomon kaj premas Enen, la programo daŭras kaj presas la saluton:

```console
$ raku exercises/strings/hello-concatenation.raku
Kio estas via nomo? Raku
Saluton, Raku!
```

## Komentoj

Rimarku, ke ĉi-foje, la ŝnuro estas duoble citita. En duoblaj citiloj, variabloj estas interpolataj, do ilia enhavo estas metita en la ŝnuron.

{% include nav.html %}