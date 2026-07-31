---
title: 'Solvo: La domena parto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $email = 'user@example.com';

my $at = $email.index('@');
say $email.substr($at + 1);
```

🦋 Vi povas trovi la fontkodon en la dosiero [find-domain.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/find-domain.raku).

## Eligo

```
example.com
```

## Komentoj

1. `index('@')` redonas `4` — la nul-bazitan pozicion de la signo `@`.

1. `substr($at + 1)` komenciĝas unu signon post la `@` kaj, sen donita longeco, iras ĝis la fino de la ĉeno, donante `example.com`.

{% include nav.html %}
