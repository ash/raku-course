---
title: Mantošana
translations_gpt:
---

{% include menu.html %}

_Mantošana_ ļauj vienai klasei būvēties uz citas. Klase, kas deklarēta ar `is` aiz sava nosaukuma, manto tās klases atribūtus un metodes, kuru nosauc, — savas _vecākklases_ (jeb _bāzes klases_).

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

`Dog is Animal` nozīmē, ka `Dog` ir `Animal` paveids. Neko jaunu nerakstot, `Dog` jau ir atribūts `name` un metode `speak` no `Animal`:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.name;  # Rex
say $rex.speak; # some sound
```

`Dog` objekts tiek atpazīts arī kā `Animal`:

```raku
say Dog.new ~~ Animal; # True
```

Gudrā sakritība `~~` pret tipu ir patiesa, kad objekts ir šī tipa vai to manto. Nākamais temats parāda, kā bērnklase var aizstāt mantotu metodi ar savu versiju.

{% include nav.html %}
