---
title: Metožu pārrakstīšana
translations_gpt:
---

{% include menu.html %}

Bērnklase var nodrošināt savu mantotās metodes versiju. To sauc par _pārrakstīšanu_. Kad metode tiek izsaukta uz bērnklases objekta, vecākklases versijas vietā izpildās bērnklases versija.

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
    method intro {
        "$.name says " ~ self.speak;
    }
}

class Dog is Animal {
    method speak {
        'Woof';
    }
}

class Cat is Animal {
    method speak {
        'Meow';
    }
}
```

`Dog` un `Cat` katrs pārraksta `speak`. Metode `intro`, kas mantota no `Animal` bez izmaiņām, izsauc `self.speak` — un šis izsaukums izmanto to `speak`, kas pieder īstajam objektam:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

Tātad viena un tā pati mantotā `intro` dod dažādus rezultātus, jo katrs objekts nes savu `speak`. Šī ir viena no objektorientētās programmēšanas centrālajām idejām: koplietots kods, kas pielāgojas tam konkrētajam objekta veidam, ar kuru strādā.

{% include nav.html %}
