---
title: Lasāmi un rakstāmi atribūti
translations_gpt:
---

{% include menu.html %}

Pēc noklusējuma piekļuves metode, ko izveido `has $.name`, ir _tikai lasāma_. Vērtība tiek inicializēta konstruktorā, un pēc tam to var nolasīt, bet no ārpuses mainīt nevar. Piešķiršana tai ir kļūda:

```raku
class Dog {
    has $.name;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
```

Tas apstājas ar:

```
Cannot modify an immutable Str (Rex)
```

Lai atļautu vērtību mainīt caur piekļuves metodi, atzīmējiet atribūtu ar iezīmi `is rw`:

```raku
class Dog {
    has $.name is rw;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
say $rex.name; # Max
```

Tagad piekļuves metode atgriež rakstāmu konteineru, tāpēc piešķiršana darbojas un objekta `name` kļūst par `Max`.

{% include nav.html %}
