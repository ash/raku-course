---
title: 'Solutio: Grammaticam hereditare'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Exitus

```
True
True
False
```

## Commentarii

1. Et `Dog is Animal` et `Cat is Animal` tesseram `TOP` ex basi immutatam heredant; unaquaeque solum proprium `sound` praebet.

1. Itaque una grammatica basis duobus modis diversis extenditur. `Dog` solum `woof` congruit et `Cat` solum `meow` — quapropter `Dog.parse('meow')` deficit: canis proprium `sound` superscriptum servat, exacte sicut methodi superscriptae in obiectis se gerunt.

{% include nav.html %}
