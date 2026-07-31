---
title: 'Solvo: La valoro de do-bloko'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 Vi povas trovi la fontkodon en la dosiero [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Eligo

```
big
```

## Komentoj

1. Nuda `if` estas deklaro kaj ne havas uzeblan valoron. La prefikso `do` transformas la tutan `if`/`else` en esprimon.

1. Ĉar `7 > 5` estas vera, la esprimo donas `'big'`, kio estas atribuita al `$label`. La sama truko funkcias kun `do given` kaj `do for`.

1. La `{ }` krampoj ne estas nedevigaj. La `if` de Raku ĉiam prenas blokon, do vi ne povas mallongigi la branĉojn al `if 7 > 5 'big' else 'small'` — tio malsukcesas kompili kun *Missing block*.

{% include nav.html %}
