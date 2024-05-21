---
title: Het else-blok
---

{% include menu.html %}

Een `if`-blok kan gevolgd worden door een `else`-blok, dat wordt uitgevoerd wanneer de conditie niet is voldaan.

```raku
my $t = 36.6;
if 35.5 < $t < 37.5 {
    say 'Je bent in orde.';
}
else {
    say 'Misschien een dokter bellen?';
}
```

Het `else`-blok kan niet op zichzelf worden gebruikt (er is een beter alternatief genaamd [`unless`](../unless), dat zo meteen wordt geïntroduceerd).

{% include nav.html %}