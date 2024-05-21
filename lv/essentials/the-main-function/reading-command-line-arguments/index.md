---
title: Komandrindas argumentu lasīšana
---

{% include menu.html %}

Funkcija `MAIN` ir noderīga ne tikai tāpēc, ka tā skaidri norāda programmas sākumu, bet arī tās argumentu dēļ, kas saņem komandrindā nodotās vērtības.

Ir divi veidi, kā lasīt komandrindas argumentus. Viens no tiem ir caur [`@*ARGS` masīvu](/lv/essentials/positionals/args-array), kuru mēs jau izmantojām. Tagad aplūkosim otro metodi.

Apsveriet programmu, kas saskaita divus skaitļus.

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

Jūs varat palaist programmu šādā veidā. Programma izdrukā savu divu argumentu summu:

```console
$ raku t.raku 123 45
168
```

Tāpat kā jebkurai citai funkcijai, `MAIN` funkcijai var būt noklusējuma vērtības dažiem (vai pat visiem) tās argumentiem. Piemēram:

```raku
sub MAIN($a, $b = 100) {
    say $a + $b;
}
```

Ja otrais arguments nav norādīts, tiek izmantota noklusējuma vērtība:

```console
$ raku t.raku 15
115
```

{% include nav.html %}