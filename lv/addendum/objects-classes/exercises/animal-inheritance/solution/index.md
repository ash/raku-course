---
title: 'Risinājums: Dzīvnieki, kas runā'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Animal {
    has $.name;
    method speak { '...' }
    method greet { "{$.name} says {self.speak}" }
}

class Dog is Animal { method speak { 'Woof' } }
class Cat is Animal { method speak { 'Meow' } }

for Dog.new(name => 'Rex'), Cat.new(name => 'Tom') -> $pet {
    say $pet.greet;
}
```

🦋 Atrodiet programmu failā [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Izvade

```
Rex says Woof
Tom says Meow
```

## Komentāri

1. `greet` ir definēta vienreiz bāzes klasē, bet tā izsauc `self.speak`. Tā kā
`self` ir īstais objekts, izsaukums nonāk pie apakšklases pašas `speak`.

1. Tas ir polimorfisms: viena un tā pati `greet` sunim rada `Woof` un kaķim `Meow`
bez jebkāda nosacījumu koda.

{% include nav.html %}
