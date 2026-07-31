---
title: 'Solvo: Dividu dosiernomon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
if 'report.txt' ~~ / (\w+) '.' (\w+) / {
    say ~$0;
    say ~$1;
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [split-filename.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/split-filename.raku).

## Eligo

```
report
txt
```

## Komentoj

1. La unua paro de krampoj kaptas la baznomon en `$0`, la dua kaptas la sufikson en `$1`. La punkto inter ili estas citita, do ĝi kongruas kun laŭlitera `.` anstataŭ kun ajna signo.

1. La `~` antaŭ ĉiu kapto metas ĝin en ĉenan kuntekston, do ĝi presiĝas kiel simpla teksto. Simpla `say $0` anstataŭe montrus la kongruan objekton kun ĝiaj angulaj krampoj, `｢report｣`. Skribi `say $0.Str` faras la samon kiel `say ~$0`.

{% include nav.html %}
