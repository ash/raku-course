---
title: Spatia nominum et our
translations_gpt:
---

{% include menu.html %}

Declarator `our` id facit quod aliquid in suo spatio nominum visibile sit. Variabilis declarata cum `my` lexicalis est — privata suo blocco — dum variabilis declarata cum `our` etiam variabilis fasciculi est, ab extra per viam `::` attingibilis:

```raku
module Counter {
    our $count = 0;  # package variable
    my  $secret = 42; # lexical, not visible outside
}

say $Counter::count; # 0
```

`$Counter::count` operatur quia `count` cum `our` declarata est; `$Counter::secret` falleret, quia `secret` lexicalis est.

Spatia nominum **nidificari** possunt. Fasciculus intra fasciculum longiorem viam `::` aedificat:

```raku
module Outer {
    module Inner {
        our $val = 42;
    }
}

say $Outer::Inner::val; # 42
```

Nomen plenum `$Outer::Inner::val` ab exteriore spatio nominum per interiorem ad variabilem progreditur. Hoc est exacte quomodo bibliotheca ordinaria disposita est — nomina ut `IO::Socket::INET` sunt spatia nominum nidificata — et quomodo modulus a te scriptus partes suas sub uno nomine summo colligit.

{% include nav.html %}
