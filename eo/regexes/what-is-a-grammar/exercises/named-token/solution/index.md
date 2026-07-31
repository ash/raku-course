---
title: 'Solvo: Nomita ĵetono'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Eligo

```
｢hello｣
```

## Komentoj

1. `my regex word { \w+ }` donas al la ŝablono nomon, por ke ĝi povu esti reuzata.

1. Skribi `<word>` en la ŝablono kongruas kun ĝi kaj kaptas la rezulton sub la sama nomo, atingebla kiel `$<word>`. La unua serio de vortaj signoj estas `hello`.

{% include nav.html %}
