---
title: 'Oplossing: Een grammatica voor volledige namen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar FullName {
    token TOP   { <first> \s+ <last> }
    token first { \w+ }
    token last  { \w+ }
}

my $match = FullName.parse('Grace Hopper');

say ~$match<first>;
say ~$match<last>;
```

🦋 Je kunt de broncode vinden in het bestand [grammar-fullname.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-fullname.raku).

## Uitvoer

```
Grace
Hopper
```

## Opmerkingen

1. Het token `TOP` is waar het ontleden begint; het verwijst op naam naar de andere tokens
met `<first>` en `<last>`, die sleutels op de match worden.

1. `$match<first>` is een matchobject; het voorvoegsel `~` maakt er de kale
gematchte tekst van.

{% include nav.html %}
