---
title: 'Solvo: La ordo de END-oj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 Vi povas trovi la fontkodon en la dosiero [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Eligo

```
body
second END
first END
```

## Komentoj

1. Ambaŭ `END`-phasers ruliĝas post la ĉefa kodo, do `body` estas presata unue.

1. Pluraj `END`-phasers ruliĝas laŭ la principo lasta-eniras-unua-eliras: la `second END`, deklarita poste, ruliĝas antaŭ la `first END`. Tio spegulas, kiel purigado kutime devas malfari la plej lastan aranĝon unue.

{% include nav.html %}
