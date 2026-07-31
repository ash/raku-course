---
title: Pakketten en modules
translations_gpt:
---

{% include menu.html %}

Het sleutelwoord `package` introduceert een naamruimte. Alles wat erin gedeclareerd wordt met `our` wordt onderdeel van die naamruimte en is van buitenaf bereikbaar via de naam van het pakket en het `::`-scheidingsteken:

```raku
package Maths {
    our $pi = 3.14;
    our sub double($x) { $x * 2 }
}

say $Maths::pi;         # 3.14
say Maths::double(5);   # 10
```

De variabele wordt benaderd als `$Maths::pi` — het sigil, dan de pakketnaam, dan de variabelenaam. Een subroutine wordt aangeroepen als `Maths::double(...)`.

Zowel `package` als `module` maken een naamruimte aan; ze verschillen in wat ze verder doen. Een `module` is de gebruikelijke keuze voor een herbruikbare code-eenheid, terwijl een gewoon `package` alleen de naamruimte biedt zonder extra's. (Een `class`, die je leert kennen in [het volgende deel](/nl/oop), maakt ook een naamruimte aan en voegt daar objectgeorienteerde functionaliteit aan toe.)

```raku
module Greet {
    our sub hello { 'hi' }
}

say Greet::hello; # hi
```

De naamruimte die je van `module` hebt gekregen is dus hetzelfde mechanisme dat een `package` op zichzelf biedt. De keuze ertussen is vooral een kwestie van intentie: `module` voor bibliotheken, `package` voor een kale naamruimte — en zodra je bij objecten komt, `class` voor typen.

{% include nav.html %}
