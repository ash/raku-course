---
title: 'Solutio: Tessera nominata'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my regex word { \w+ }

if 'hello world' ~~ / <word> / {
    say $<word>;
}
```

🦋 Inveni codicem fontem in archivo [named-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/named-token.raku).

## Exitus

```
｢hello｣
```

## Commentarii

1. `my regex word { \w+ }` exemplari nomen dat ut iterum adhiberi possit.

1. `<word>` in exemplari scribens illud congruis et effectum sub eodem nomine capis, ut `$<word>` attingendum. Prima series characterum verbi est `hello`.

{% include nav.html %}
