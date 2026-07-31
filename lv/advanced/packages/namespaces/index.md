---
title: Vārdtelpas un our
translations_gpt:
---

{% include menu.html %}

Deklarators `our` padara kaut ko redzamu tā vārdtelpā. Mainīgais, kas deklarēts ar `my`, ir leksisks — privāts savam blokam —, savukārt mainīgais, kas deklarēts ar `our`, ir arī pakotnes mainīgais, sasniedzams no ārpuses caur `::` ceļu:

```raku
module Counter {
    our $count = 0;  # package variable
    my  $secret = 42; # lexical, not visible outside
}

say $Counter::count; # 0
```

`$Counter::count` darbojas, jo `count` tika deklarēts ar `our`; `$Counter::secret` nedarbotos, jo `secret` ir leksisks.

Vārdtelpas var būt **ligzdotas**. Pakotne pakotnes iekšienē veido garāku `::` ceļu:

```raku
module Outer {
    module Inner {
        our $val = 42;
    }
}

say $Outer::Inner::val; # 42
```

Pilnais nosaukums `$Outer::Inner::val` ved no ārējās vārdtelpas uz iekšējo un līdz mainīgajam. Tieši tā ir organizēta standarta bibliotēka — nosaukumi kā `IO::Socket::INET` ir ligzdotas vārdtelpas —, un tieši tā modulis, ko jūs rakstāt, grupē savas daļas zem viena augstākā līmeņa nosaukuma.

{% include nav.html %}
