---
title: Pakoj kaj moduloj
translations_gpt:
---

{% include menu.html %}

La ŝlosilvorto `package` enkondukas nomspacon. Ĉio deklarita ene de ĝi per `our` fariĝas parto de tiu nomspaco kaj povas esti atingita de ekstere per la nomo de la pako kaj la apartigilo `::`:

```raku
package Maths {
    our $pi = 3.14;
    our sub double($x) { $x * 2 }
}

say $Maths::pi;         # 3.14
say Maths::double(5);   # 10
```

La variablo estas atingata kiel `$Maths::pi` — la sigelo, poste la nomo de la pako, poste la nomo de la variablo. Subrutino estas vokata kiel `Maths::double(...)`.

Kaj `package` kaj `module` kreas nomspacon; ili diferencas en tio, kion alian ili faras. `module` estas la kutima elekto por unuo de reuzebla kodo, dum simpla `package` estas nur la nomspaco sen io kroma. (`class`, kiun vi renkontos en [la sekva parto](/eo/oop), ankaŭ kreas nomspacon kaj aldonas objekt-orientitan maŝinaron supre.)

```raku
module Greet {
    our sub hello { 'hi' }
}

say Greet::hello; # hi
```

Do la nomspaco, kiun vi ricevadis de `module`, estas la sama mekanismo, kiun `package` provizas memstare. Elekti inter ili temas plejparte pri intenco: `module` por bibliotekoj, `package` por nuda nomspaco — kaj, kiam vi atingos objektojn, `class` por tipoj.

{% include nav.html %}
