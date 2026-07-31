---
title: 'Solutio: Variabilem processui filio trade'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $file = 'notes.txt';
spurt $file, "one\ntwo\nthree\n";

%*ENV<NOTES> = $file;

my $proc = shell 'wc -l < "$NOTES"', :out;
say $proc.out.slurp(:close).trim;

unlink $file;
```

🦋 Inveni codicem fontem in archivo [read-env.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/read-env.raku).

## Exitus

```
3
```

## Commentarii

1. `spurt` `notes.txt` cum tribus lineis creat. `%*ENV<NOTES>` ad nomen eius ponens nomen archivi in ambitum ponis quem quodlibet programma filium heredabit.

1. Imperatum `shell` illum ambitum heredat, `$NOTES` in `notes.txt` expandit, et archivum in `wc -l` fundit, quod lineas eius numerat. Redirectio `< "$NOTES"` exitum ad solum numerum `3` restringit, quem per `:out` capimus et amputamus.

1. Denique purgatio in Raku ipso per `unlink` fit — nullo interprete opus. Archivum delere mera operatio systematis archivorum est, itaque nulla ratio est alium processum ad id lanciandi.

{% include nav.html %}
