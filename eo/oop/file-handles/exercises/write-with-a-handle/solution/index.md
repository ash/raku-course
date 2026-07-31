---
title: 'Solvo: Skribi per tenilo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $fh = open 'out.txt', :w;
$fh.say($_) for 1..3;
$fh.close;

print slurp 'out.txt';
```

🦋 Vi povas trovi la fontkodon en la dosiero [write-with-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/write-with-a-handle.raku).

## Eligo

```
1
2
3
```

## Komentoj

1. `open` kun la flago `:w` donas tenilon por skribado. La tenilo restas malfermita tra la buklo, do ĉiu `$fh.say` aldonas alian linion — jen la avantaĝo de tenilo super `spurt`, kiu remalfermus la dosieron ĉiufoje.

1. `close` elŝovas la datumojn al disko, do la sekva `slurp` relegas ĉiujn tri liniojn.

{% include nav.html %}
