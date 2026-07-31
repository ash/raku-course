---
title: 'Solvo: Urbo kaj lando'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Eligo

```
London
UK
```

## Komentoj

1. `$<city>=( … )` kaj `$<country>=( … )` donas al la du kaptoj nomojn anstataŭ numerojn.

1. Post la kongruo ili estas relegataj kiel `$<city>` kaj `$<country>`, kio legiĝas pli klare ol `$0` kaj `$1` farus.

1. La prefikso `~` metas ĉiun kapton en ĉenan kuntekston, do ĝi presiĝas kiel simpla teksto; sen ĝi, `say $<city>` montrus la kongruan objekton kiel `｢London｣`.

{% include nav.html %}
