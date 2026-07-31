---
title: Namespace e our
translations_gpt: true
---

{% include menu.html %}

Il dichiaratore `our` è ciò che rende qualcosa visibile nel suo namespace. Una variabile dichiarata con `my` è lessicale — privata al suo blocco — mentre una dichiarata con `our` è anche una variabile di package, raggiungibile dall'esterno attraverso il percorso `::`:

```raku
module Counter {
    our $count = 0;  # package variable
    my  $secret = 42; # lexical, not visible outside
}

say $Counter::count; # 0
```

`$Counter::count` funziona perché `count` è stata dichiarata con `our`; `$Counter::secret` fallirebbe, perché `secret` è lessicale.

I namespace possono essere **annidati**. Un package all'interno di un altro package costruisce un percorso `::` più lungo:

```raku
module Outer {
    module Inner {
        our $val = 42;
    }
}

say $Outer::Inner::val; # 42
```

Il nome completo `$Outer::Inner::val` parte dal namespace esterno, entra in quello interno e arriva alla variabile. È esattamente così che è organizzata la libreria standard — nomi come `IO::Socket::INET` sono namespace annidati — ed è il modo in cui un modulo che scrivi raggruppa le sue parti sotto un unico nome di primo livello.

{% include nav.html %}
