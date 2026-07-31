---
title: Superregi metodojn
translations_gpt:
---

{% include menu.html %}

Ida klaso povas provizi sian propran version de heredita metodo. Tio nomiĝas _superregi_. Kiam la metodo estas vokata sur objekto de la ida klaso, la versio de la ido ruliĝas anstataŭ tiu de la patro.

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

`Dog` kaj `Cat` ĉiu superregas `speak`. La metodo `intro`, heredita senŝanĝe de `Animal`, vokas `self.speak` — kaj tiu voko uzas tiun `speak`, kiu apartenas al la efektiva objekto:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

Do la sama heredita `intro` produktas malsamajn rezultojn, ĉar ĉiu objekto alportas sian propran `speak`. Ĉi tio estas unu el la centraj ideoj de objekt-orientita programado: kunhavata kodo, kiu adaptiĝas al la specifa speco de objekto, sur kiu ĝi laboras.

{% include nav.html %}
