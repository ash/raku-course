---
title: 'Solvo: Kalkuli kaj sumigi'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 Vi povas trovi la fontkodon en la dosiero [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Eligo

```
4
41
```

## Komentoj

1. La konstantoj estas difinitaj kiel paroj, do ĉiu ricevas la valoron, kiun ni elektis, anstataŭ la aŭtomatan numeradon ekde nulo.

1. `.enums` redonas mapon de ĉiu konstanta nomo al ĝia valoro. `.elems` kalkulas la erojn — estas kvar moneroj.

1. `.values` eltiras nur la nombrojn malantaŭ la nomoj, kaj `.sum` adicias ilin: `1 + 5 + 10 + 25` estas `41`.

{% include nav.html %}
