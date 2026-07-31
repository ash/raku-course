---
title: whenever un when
translations_gpt:
---

{% include menu.html %}

`react` bloka forma var likties pazīstama. Ārējs bloks, kas satur vairākus iekšējus blokus, no kuriem katrs darbojas ar tematu `$_`, ir tieši tas, kā raksta [`given`/`when`](/lv/advanced/given-when). Ja jums vienas veselas straumes vietā būtu viens temperatūras rādījums, jūs pēc tā zarotos šādi:

```raku
given $temperature {
    when 18 { say 'cool' }
    when 21 { say 'warm' }
}
```

Līdzība ar `react`/`whenever` ir īsta, bet abi dara ļoti dažādus darbus:

* **`given`/`when` apstrādā vienu vērtību tepat un tagad.** `given` iestata `$_` uz vienu vērtību; katrs `when` to pārbauda (`$_ ~~ 18`), izpildās **pirmā** sakritība, un bloks ir beidzies. Tas ir parasts, sinhrons nosacījums.
* **`react`/`whenever` apstrādā daudzas vērtības laika gaitā.** `whenever` nesalīdzina `$_` ar paraugu — tas *abonē* supply, un tā ķermenis izpildās **katrai** vērtībai, ko šī supply izstaro, kad vien šī vērtība pienāk. Visi `whenever` ir dzīvi vienlaikus, un `react` turpina bloķēt, līdz pabeigta ir katra no to supply.

Tātad `when` jautā: «vai šī viena vērtība atbilst?», kamēr `whenever` saka: «katrai vērtībai, ko šī straume jebkad radīs, dari šo». Tas pats skelets, ļoti dažādi mūži: vienreiz izvēlēts zars pret reakciju, kas atkārtojas atkal un atkal, notikumiem pienākot.

{% include nav.html %}
