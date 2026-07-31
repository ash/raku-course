---
title: 'Solvo: Transdonu variablon al ida procezo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $file = 'notes.txt';
spurt $file, "one\ntwo\nthree\n";

%*ENV<NOTES> = $file;

my $proc = shell 'wc -l < "$NOTES"', :out;
say $proc.out.slurp(:close).trim;

unlink $file;
```

🦋 Vi povas trovi la fontkodon en la dosiero [read-env.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/read-env.raku).

## Eligo

```
3
```

## Komentoj

1. `spurt` kreas `notes.txt` kun tri linioj. Starigi `%*ENV<NOTES>` al ĝia nomo metas la dosiernomon en la medion, kiun ĉiu ida programo heredos.

1. La komando `shell` heredas tiun medion, ekspansias `$NOTES` al `notes.txt`, kaj enigas la dosieron en `wc -l`, kiu kalkulas ĝiajn liniojn. La redirektado `< "$NOTES"` tenas la eligon nur al la nombro `3`, kiun ni kaptas per `:out` kaj tondas.

1. Fine la purigo estas farata reen en Raku per `unlink` — neniu ŝelo bezonata. Forigi la dosieron estas simpla dosiersistema operacio, do ne estas kialo lanĉi alian procezon por ĝi.

{% include nav.html %}
