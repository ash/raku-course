---
title: 'Solutio: Probatio palindromi'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 Inveni codicem fontem in archivo [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Exitus

```
level: yes
hello: no
racecar: yes
```

## Commentarii

1. `.flip` signa catenae invertit. Verbum palindromus est exacte cum
inversioni suae aequat, quod ternarium in `yes` vel `no` vertit.

{% include nav.html %}
