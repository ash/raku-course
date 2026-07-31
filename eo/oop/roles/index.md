---
title: Roloj
translations_gpt:
---

{% include menu.html %}

_Rolo_ estas fasko de konduto (kaj foje datumoj), kiu povas esti kunhavata de pluraj klasoj. Dum heredo diras, ke klaso _estas_ speco de alia, rolo priskribas ion, kion klaso _povas fari_.

Vi difinas rolon per la ŝlosilvorto `role`, multe kiel klason, kaj vi donas ĝin al klaso per la trajto `does`:

```raku
role Greet {
    method hello {
        'Hello from ' ~ self.name;
    }
}

class Person does Greet {
    has $.name;
}
```

La klaso `Person` nun havas la metodon `hello` el la rolo, kvazaŭ ĝi estus skribita en la klaso mem:

```raku
say Person.new(name => 'Anna').hello; # Hello from Anna
```

Klaso, kiu faras rolon, estas rekonata kiel havanta tiun rolon:

```raku
say Person.new(name => 'Anna') ~~ Greet; # True
```

Rimarku, ke la metodo `hello` de la rolo uzas `self.name`, kvankam la rolo mem havas neniun atributon `name`. Tio estas en ordo: la metodo ruliĝas kiel parto de kiu ajn klaso kunmetas la rolon, kaj tiu klaso provizas `name`. La sekva temo montras, ke klaso povas preni pli ol unu rolon samtempe.

{% include nav.html %}
