---
title: Methoden overschrijven
translations_gpt:
---

{% include menu.html %}

Een kindklasse kan haar eigen versie van een geërfde methode aanbieden. Dat heet _overschrijven_. Wanneer de methode op een object van de kindklasse aangeroepen wordt, draait de versie van het kind in plaats van die van de ouder.

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

`Dog` en `Cat` overschrijven elk `speak`. De methode `intro`, ongewijzigd van `Animal` geërfd, roept `self.speak` aan — en die aanroep gebruikt de `speak` die bij het werkelijke object hoort:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

Dezelfde geërfde `intro` levert dus verschillende resultaten op, omdat elk object zijn eigen `speak` meebrengt. Dit is een van de centrale ideeën van objectgeoriënteerd programmeren: gedeelde code die zich aanpast aan de specifieke soort object waarmee ze werkt.

{% include nav.html %}
