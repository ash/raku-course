---
title: 'Solvo: Vico-prezado'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
multi sub price(Int $qty where $qty >= 10) { say 'bulk price' }
multi sub price(Int $qty)                  { say 'normal price' }

price(3);
price(25);
```

🦋 Vi povas trovi la fontkodon en la dosiero [bulk-pricing.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/bulk-pricing.raku).

## Eligo

```
normal price
bulk price
```

## Komentoj

1. La unua kandidato havas `where`-frazon, kiu akceptas nur kvantojn de 10 aŭ pli, do la voko `price(25)` estas sendita al ĝi.

1. La dua kandidato ne havas kondiĉon kaj funkcias kiel la ĝenerala kazo, do `price(3)` iras tien.

{% include nav.html %}
