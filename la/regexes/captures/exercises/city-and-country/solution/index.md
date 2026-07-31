---
title: 'Solutio: Urbs et regio'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 Inveni codicem fontem in archivo [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Exitus

```
London
UK
```

## Commentarii

1. `$<city>=( … )` et `$<country>=( … )` duobus capturis nomina loco numerorum dant.

1. Post congruentiam ut `$<city>` et `$<country>` releguntur, quod clarius legitur quam `$0` et `$1`.

1. Praefixum `~` unumquemque capturam in contextum catenae ponit ut ut textus simplex imprimatur; sine eo `say $<city>` obiectum congruentiae ut `｢London｣` ostenderet.

{% include nav.html %}
