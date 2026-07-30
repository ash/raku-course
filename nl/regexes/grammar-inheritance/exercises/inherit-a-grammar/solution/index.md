---
title: 'Oplossing: Erf een grammatica'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Animal {
    token TOP   { <sound> }
    token sound { \w+ }
}

grammar Dog is Animal {
    token sound { 'woof' }
}

grammar Cat is Animal {
    token sound { 'meow' }
}

say Dog.parse('woof').defined;
say Cat.parse('meow').defined;
say Dog.parse('meow').defined;
```

🦋 Je kunt de broncode vinden in het bestand [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Uitvoer

```
True
True
False
```

## Opmerkingen

1. Zowel `Dog is Animal` als `Cat is Animal` erft het token `TOP` ongewijzigd van de basis; elk levert alleen zijn eigen `sound`.

1. Zo wordt één basisgrammatica op twee verschillende manieren uitgebreid. `Dog` matcht alleen `woof` en `Cat` alleen `meow` — en daarom mislukt `Dog.parse('meow')`: een hond houdt zijn eigen overschreven `sound`, precies zoals overschreven methoden zich op objecten gedragen.

{% include nav.html %}
