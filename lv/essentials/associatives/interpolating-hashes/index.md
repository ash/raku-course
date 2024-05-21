---
title: Starphu interpolācija
---

{% include menu.html %}

Lai interpolētu masīva elementus dubultpēdiņu virknēs, uzrakstiet tos tā, kā to darāt pašā programmā: `%data<FR>`. Lai interpolētu visu starpu, pievienojiet pāri tukšu leņķa vai cirtainu iekavu: `@data{}`. Šāda pieeja ir ilustrēta sekojošajā programmā:

```raku
my %data = FR => 'Parīze', IT => 'Roma';

say "%data<FR>";
say "%data<>";

# Vai arī:
# say "%data{}";
```

Šī programma izdrukā pieprasītos datus:

```console
$ raku t.raku
Parīze
FR	Parīze
IT	Roma
```

Ņemiet vērā, ka visas starpas drukāšana var radīt vairākrindu izvadi.

{% include nav.html %}