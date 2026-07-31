---
title: 'Solvo: Kontrolu la elirkodon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 Vi povas trovi la fontkodon en la dosiero [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Eligo

```
4
failure
```

## Komentoj

1. `run` redonas `Proc`. Konservi ĝin en `$proc` — kaj poste legi ĝin — gravas ĉi tie: malsukcesa komando, kies `Proc` estas forĵetita, ĵetus, sed inspekti la rezulton kalkuliĝas kiel trakti ĝin.

1. `.exitcode` estas la nombro, kiun la komando redonis: `4`. Testi la `Proc` kiel Boolean valoron respondas la pli simplan demandon — ĝi estas vera nur, kiam la elirkodo estas `0`, do ĉi tie ĝi estas malvera kaj la programo presas `failure`.

{% include nav.html %}
