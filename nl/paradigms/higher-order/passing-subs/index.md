---
title: Subroutines meegeven
translations_gpt:
---

{% include menu.html %}

Om een subroutine als parameter aan te nemen, declareer je haar met de sigil `&`. Binnen de body kun je haar dan bij naam aanroepen:

```raku
sub apply(&f, $x) {
    f($x);
}

say apply(* + 3, 10); # 13
```

De parameter `&f` ontvangt een stuk code, en `f($x)` roept het aan. Hier gaven we `* + 3` mee, een _Whatever_-uitdrukking die betekent "tel drie op bij wat je ook krijgt", dus berekent `apply(* + 3, 10)` `13`.

Een benoemde subroutine geef je net zo gemakkelijk mee, door ernaar te verwijzen met de sigil `&` zodat ze meegegeven en niet aangeroepen wordt:

```raku
sub double($n) { $n * 2 }

sub apply(&f, $x) {
    f($x);
}

say apply(&double, 5); # 10
```

Precies zo werken `map` en `grep`: het zijn subroutines die een andere subroutine — jouw blok — aannemen en op elk element toepassen. Zelf subroutines schrijven die code aannemen maakt ze net zo flexibel.

{% include nav.html %}
