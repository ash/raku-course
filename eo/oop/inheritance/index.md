---
title: Heredo
translations_gpt:
---

{% include menu.html %}

_Heredo_ permesas al unu klaso konstrui sur alia. Klaso deklarita per `is` post sia nomo heredas la atributojn kaj metodojn de la klaso, kiun ĝi nomas — ĝia _patra_ (aŭ _baza_) klaso.

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
}

class Dog is Animal {
}
```

`Dog is Animal` signifas, ke `Dog` estas speco de `Animal`. Sen skribi ion novan, `Dog` jam havas la atributon `name` kaj la metodon `speak` el `Animal`:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.name;  # Rex
say $rex.speak; # some sound
```

Objekto `Dog` estas ankaŭ rekonata kiel `Animal`:

```raku
say Dog.new ~~ Animal; # True
```

La saĝa kongruado `~~` kontraŭ tipo estas vera, kiam la objekto estas de tiu tipo aŭ heredas de ĝi. La sekva temo montras, kiel ida klaso povas anstataŭigi hereditan metodon per sia propra versio.

{% include nav.html %}
