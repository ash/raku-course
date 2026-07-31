---
title: 'Solvo: Trovu metodon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Animal {
    method speak { 'generic' }
}

class Dog is Animal {
}

say so Dog.^find_method('speak');
```

🦋 Vi povas trovi la fontkodon en la dosiero [find-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/find-method.raku).

## Eligo

```
True
```

## Komentoj

1. `.^find_method` redonas la metodon, se ĝi ekzistas, aŭ nedifinitan valoron se ne. La `so` transformas tion en simplan Boolean valoron.

1. `Dog` difinas neniujn metodojn mem, tamen la rezulto estas `True`: `find_method` traserĉas la tutan heredan ĉenon kaj trovas `speak` supre en `Animal`. Tio spegulas, kiel efektiva metodvoko sur `Dog` lokalizus la hereditan metodon.

{% include nav.html %}
