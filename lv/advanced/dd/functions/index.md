---
title: Funkciju parakstu izgūšana
translations_gpt:
---

{% include menu.html %}

Kails `dd` — izsaukts bez argumentiem apakšprogrammas iekšienē — izdrukā šīs apakšprogrammas parakstu: tās nosaukumu un parametru sarakstu, ja tādi ir. Aplūkojiet šo piemēru ar divām apakšprogrammām:

```raku
sub f1 {
    dd
}

f1();

sub f2($x) {
    dd
}

f2(42);
```

Programma jebkādu vērtību vietā izdrukā parakstus:

```console
sub f1()
sub f2($x)
```

Tas ir īpaši noderīgi ar multifunkcijām, kur tas pasaka, kurš kandidāts patiešām tika izsaukts:

```raku
multi sub g {
    dd
}

multi sub g($x) {
    dd
}

g();
g(42);
```

Izvade katrreiz nosauc atbilstošo variantu:

```console
sub g()
sub g($x)
```

{% include nav.html %}
