---
title: Nomspacoj kaj our
translations_gpt:
---

{% include menu.html %}

La deklaracio `our` estas tio, kio faras ion videbla en ĝia nomspaco. Variablo deklarita per `my` estas leksika — privata al sia bloko — dum tiu deklarita per `our` estas ankaŭ paka variablo, atingebla de ekstere per la vojo `::`:

```raku
module Counter {
    our $count = 0;  # paka variablo
    my  $secret = 42; # leksika, ne videbla ekstere
}

say $Counter::count; # 0
```

`$Counter::count` funkcias, ĉar `count` estis deklarita per `our`; `$Counter::secret` malsukcesus, ĉar `secret` estas leksika.

Nomspacoj povas **nestiĝi**. Pako ene de pako konstruas pli longan vojon `::`:

```raku
module Outer {
    module Inner {
        our $val = 42;
    }
}

say $Outer::Inner::val; # 42
```

La plena nomo `$Outer::Inner::val` iras de la ekstera nomspaco, en la internan, ĝis la variablo. Ĝuste tiel la norma biblioteko estas organizita — nomoj kiel `IO::Socket::INET` estas nestitaj nomspacoj — kaj tiel modulo, kiun vi skribas, grupigas siajn partojn sub unu supra nomo.

{% include nav.html %}
