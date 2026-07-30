---
title: Subroutines teruggeven
translations_gpt:
---

{% include menu.html %}

Een subroutine kan ook een subroutine **teruggeven**. Zo bouw je gaandeweg nieuwe functies, op maat van de argumenten die je meegeeft:

```raku
sub adder($n) {
    sub ($x) { $x + $n };
}

my &add5 = adder(5);
say add5(3); # 8
```

`adder(5)` bouwt en geeft een anonieme subroutine terug die `5` bij haar argument optelt. We bewaren die in `&add5` en roepen haar aan als elke andere subroutine. `adder(10)` aanroepen zou een andere opteller geven die er tien bij optelt.

Merk op dat de teruggegeven subroutine de waarde van `$n` onthoudt uit de aanroep die haar maakte — `add5` houdt haar `5` ook nadat `adder` klaar is. Een subroutine die waarden vastlegt uit het bereik waar ze gemaakt is, heet een [_closure_](/nl/paradigms/closures), het onderwerp van de volgende sectie.

Functies teruggeven is een compacte manier om families van verwante bewerkingen te maken zonder jezelf te herhalen: één definitie van `adder` levert een onbeperkt aantal specifieke optellers op.

{% include nav.html %}
