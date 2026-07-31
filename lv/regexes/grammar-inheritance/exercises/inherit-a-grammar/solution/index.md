---
title: 'Risinājums: Mantojiet gramatiku'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Izvade

```
True
True
False
```

## Komentāri

1. Gan `Dog is Animal`, gan `Cat is Animal` manto marķieri `TOP` no bāzes nemainītu; katra nodrošina tikai savu `sound`.

1. Tātad viena bāzes gramatika ir paplašināta divos dažādos veidos. `Dog` piemeklē tikai `woof`, bet `Cat` tikai `meow` — un tieši tāpēc `Dog.parse('meow')` neizdodas: suns patur savu pārrakstīto `sound`, tieši tāpat kā uz objektiem uzvedas pārrakstītas metodes.

{% include nav.html %}
