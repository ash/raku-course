---
title: Namensräume und our
---

{% include menu.html %}

Der `our`-Deklarator macht etwas in seinem Namensraum sichtbar. Eine mit `my` deklarierte Variable ist lexikalisch — privat für ihren Block — während eine mit `our` deklarierte Variable auch eine Package-Variable ist, die von außen über den `::`-Pfad erreichbar ist:

```raku
module Counter {
    our $count = 0;  # package variable
    my  $secret = 42; # lexical, not visible outside
}

say $Counter::count; # 0
```

`$Counter::count` funktioniert, weil `count` mit `our` deklariert wurde; `$Counter::secret` würde fehlschlagen, weil `secret` lexikalisch ist.

Namensräume können **verschachtelt** werden. Ein Package innerhalb eines Packages ergibt einen längeren `::`-Pfad:

```raku
module Outer {
    module Inner {
        our $val = 42;
    }
}

say $Outer::Inner::val; # 42
```

Der vollständige Name `$Outer::Inner::val` navigiert vom äußeren Namensraum in den inneren zur Variable. Genau so ist die Standardbibliothek organisiert — Namen wie `IO::Socket::INET` sind verschachtelte Namensräume — und so gruppiert ein von dir geschriebenes Modul seine Teile unter einem übergeordneten Namen.

{% include nav.html %}
