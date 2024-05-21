---
title: Galvenā funkcija
---

{% include menu.html %}

Raku programmai nav nepieciešami nekādi sākotnējie rituāli, tāpēc jūs varat uzreiz sākt rakstīt noderīgas instrukcijas. Šī programmas daļa, kas atrodas līmenī virs jebkura [koda bloka](/lv/essentials/code-blocks) (piemēram, [funkcijām](/lv/essentials/functions)), tiek saukta par _galveno līniju_.

Ja programmā ir funkcija ar īpašu nosaukumu `MAIN`, Raku izpilda šo funkciju pēc tam, kad viss ir kompilēts un pēc tam, kad galvenās līnijas kods ir izpildīts.

```raku
say '1. Galvenās līnijas kods';

sub MAIN {
    say '3. MAIN izsaukts';
}

say '2. Arī galvenā līnija';
```

Šī programma vispirms izpilda augstākā līmeņa `say` komandas un pēc tam izsauc `MAIN`:

```console
$ raku t.raku
1. Galvenās līnijas kods
2. Arī galvenā līnija
3. MAIN izsaukts
```

Protams, ir iespējams arī, ka programmā ir `MAIN` funkcija un nav cita galvenās līnijas koda.

{% include nav.html %}