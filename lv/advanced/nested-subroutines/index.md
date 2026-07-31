---
title: Ligzdotas apakšprogrammas
translations_gpt:
---

{% include menu.html %}

Apakšprogrammu var definēt _iekšpus_ citas apakšprogrammas. Ligzdota apakšprogramma ir parasta apakšprogramma, taču tā ir redzama tikai tajā apakšprogrammā, kas to satur.

```raku
sub outer {
    sub inner {
        say 'I am the inner subroutine';
    }

    inner;
}

outer;
```

Programma izdrukā:

```
I am the inner subroutine
```

Šeit `inner` ir deklarēta iekšpus `outer`, un `outer` to izsauc. Tas darbojas tāpēc, ka `inner` ir redzama visā `outer` ķermenī.

Ārpus `outer` nosaukums `inner` tomēr neeksistē. Šī programma nekompilējas:

```raku
sub outer {
    sub inner { 42 }
}

inner; # error: Undeclared routine: inner
```

Ligzdošana noder, kad palīgrutīna vajadzīga tikai vienai apakšprogrammai. Turot to iekšpusē, kļūst skaidrs, ka tā ir privāta detaļa, un tā tiek pasargāta no izsaukšanas no citurienes pa kļūdai.

{% include nav.html %}
