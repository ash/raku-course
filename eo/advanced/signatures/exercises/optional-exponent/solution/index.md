---
title: 'Solvo: Nedeviga eksponento'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 Vi povas trovi la fontkodon en la dosiero [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Eligo

```
25
125
```

## Komentoj

1. La `?` post `$exp` faras ĝin nedeviga, do `power` povas esti vokata kun nur la bazo.

1. Kiam `$exp` estas ellasita, ĝi estas nedifinita, kaj `//` provizas la retiriĝon `2`, do `power(5)` kvadratigas la bazon al `25`. Donite eksponenton, kiel en `power(5, 3)`, tiu valoro estas uzata anstataŭe, donante `125`.

{% include nav.html %}
