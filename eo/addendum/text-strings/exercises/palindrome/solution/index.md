---
title: 'Solvo: Kontrolo de palindromo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
for <level hello racecar> -> $word {
    say "$word: { $word eq $word.flip ?? 'yes' !! 'no' }";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [palindrome.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/palindrome.raku).

## Eligo

```
level: yes
hello: no
racecar: yes
```

## Komentoj

1. `.flip` inversigas la signojn de ĉeno. Vorto estas palindromo precize tiam, kiam
ĝi egalas sian propran inverson, kion la ternara operatoro transformas en `yes` aŭ `no`.

{% include nav.html %}
