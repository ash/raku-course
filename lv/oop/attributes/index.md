---
title: Atribūti
translations_gpt:
---

{% include menu.html %}

Tukša klase nav sevišķi noderīga. Lai objekts varētu nest savus datus, klasei dodat _atribūtus_. Atribūtu deklarē klases iekšienē ar atslēgvārdu `has`:

```raku
class Dog {
    has $.name;
    has $.age;
}
```

Katrs klases objekts iegūst savu šo atribūtu kopiju. To vērtības uzstādāt, kad objektu radāt, padodot tās `new` kā nosauktus argumentus:

```raku
class Dog {
    has $.name;
    has $.age;
}

my $rex = Dog.new(name => 'Rex', age => 3);
```

`$.` deklarācijā `has $.name` dara divas lietas uzreiz: tas deklarē atribūtu un izveido tāda paša nosaukuma metodi — _piekļuves metodi_ —, kas atgriež atribūta vērtību:

```raku
say $rex.name; # Rex
say $rex.age;  # 3
```

Dažādi objekti glabā savas vērtības neatkarīgi cits no cita:

```raku
my $rex  = Dog.new(name => 'Rex',  age => 3);
my $fido = Dog.new(name => 'Fido', age => 5);

say $rex.name;  # Rex
say $fido.name; # Fido
```

Nākamie temati parāda, kā atribūtus padarīt maināmus un kā tiem dot noklusētās vērtības. (Ir arī veids, kā deklarēt _privātus_ atribūtus, kas paslēpti no ārpuses; pie tā atgriezīsimies, kad būs ieviestas metodes.)

{% include nav.html %}
