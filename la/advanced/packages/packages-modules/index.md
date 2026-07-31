---
title: Fasciculi et moduli
translations_gpt:
---

{% include menu.html %}

Verbum clave `package` spatium nominum introducit. Quidquid intra id cum `our` declaratur, pars illius spatii nominum fit et ab extra per nomen fasciculi et separatorem `::` attingi potest:

```raku
package Maths {
    our $pi = 3.14;
    our sub double($x) { $x * 2 }
}

say $Maths::pi;         # 3.14
say Maths::double(5);   # 10
```

Variabilis attingitur ut `$Maths::pi` — sigillum, deinde nomen fasciculi, deinde nomen variabilis. Subroutina vocatur ut `Maths::double(...)`.

Tam `package` quam `module` spatium nominum creant; differunt in eo quod praeterea faciunt. `module` est electio usitata pro unitate codicis reusabilis, dum simplex `package` tantum spatium nominum est sine additamentis. (`class`, quam in [parte sequente](/la/oop) invenies, spatium nominum quoque creat et machinam obiectorum addit.)

```raku
module Greet {
    our sub hello { 'hi' }
}

say Greet::hello; # hi
```

Itaque spatium nominum quod a `module` accepisti idem mechanismum est quod `package` per se praebet. Electio inter ea maxime de proposito est: `module` pro bibliothecis, `package` pro spatio nominum nudo — et, cum ad obiecta perveneris, `class` pro typis.

{% include nav.html %}
