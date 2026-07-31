---
title: Atributoj
translations_gpt:
---

{% include menu.html %}

Malplena klaso ne estas tre utila. Por ke objekto portu siajn proprajn datumojn, vi donas al la klaso _atributojn_. Atributo estas deklarita ene de la klaso per la ŝlosilvorto `has`:

```raku
class Dog {
    has $.name;
    has $.age;
}
```

Ĉiu objekto de la klaso ricevas sian propran kopion de ĉi tiuj atributoj. Vi starigas iliajn valorojn, kiam vi kreas la objekton, transdonante ilin al `new` kiel nomitajn argumentojn:

```raku
class Dog {
    has $.name;
    has $.age;
}

my $rex = Dog.new(name => 'Rex', age => 3);
```

La `$.` en `has $.name` faras du aferojn samtempe: ĝi deklaras atributon, kaj ĝi kreas metodon de la sama nomo — _atingilon_ — kiu redonas la valoron de la atributo:

```raku
say $rex.name; # Rex
say $rex.age;  # 3
```

Malsamaj objektoj tenas siajn proprajn valorojn, sendepende unu de la alia:

```raku
my $rex  = Dog.new(name => 'Rex',  age => 3);
my $fido = Dog.new(name => 'Fido', age => 5);

say $rex.name;  # Rex
say $fido.name; # Fido
```

La sekvaj temoj montras, kiel fari atributojn ŝanĝeblaj kaj kiel doni al ili defaŭltajn valorojn. (Estas ankaŭ maniero deklari _privatajn_ atributojn, kaŝitajn de ekstere; ni revenos al ĝi, kiam metodoj estos enkondukitaj.)

{% include nav.html %}
