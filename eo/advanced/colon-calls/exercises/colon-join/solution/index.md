---
title: 'Solvo: Kunigi per dupunkto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say <a b c>.reverse.join: '-';
```

🦋 Vi povas trovi la fontkodon en la dosiero [colon-join.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-join.raku).

## Eligo

```
c-b-a
```

## Komentoj

1. `.reverse` konservas sian ordinaran formon char ghi estas en la mezo de la cheno. `join` venas lasta, do ghi povas uzi la dupunkton, transdonante `'-'` ekzakte kiel `join('-')` farus.

1. La listo inversigita al `c, b, a` estas poste kunigita per streketoj, donante `c-b-a`. La dupunkta formo funkcias kun ordinaraj valoroj, ne nur blokoj.

{% include nav.html %}
