---
title: Classes litterarum praedefinitae
translations_gpt:
---

{% include menu.html %}

Quaedam classes characterum tam frequentes sunt ut Raku eis nomina brevia det. Eas cum barra inversa scribis:

* `\d` — cifra
* `\w` — character «verbi»: littera, cifra vel lineola infima
* `\s` — character spatii albi (spatium, tabulatio, nova linea)

```raku
say 'order 66' ~~ /\d/; # ｢6｣
say 'a_b'      ~~ /\w/; # ｢a｣
say '  hi'     ~~ /\s/; # ｢ ｣
```

Unaquaeque earum socium litterae maiusculae habet qui seriem **contrariam** congruit:

* `\D` — quidquid cifra non est
* `\W` — quidquid character verbi non est
* `\S` — quidquid spatium album non est

```raku
say '  hi' ~~ /\S/; # ｢h｣
```

Denique unum punctum `.` **quemlibet** characterem omnino congruit:

```raku
say 'abc' ~~ /./; # ｢a｣
```

Hae classes praedefinitae multum scribendi parcunt, et eis in reliqua huius partis assidue uteris.

{% include nav.html %}
