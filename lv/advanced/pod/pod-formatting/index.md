---
title: Formatēšana un kods
translations_gpt:
---

{% include menu.html %}

Pod tekstā vārdus izceļat ar viena burta _formatēšanas kodiem_, kas rakstāmi kā burts, kam seko leņķa iekavas ap tekstu:

* `B<…>` — treknraksts
* `I<…>` — kursīvs
* `C<…>` — kods (vienplatuma)
* `L<…>` — saite

```raku
=begin pod

This is B<important>, and C<say> is a built-in.

=end pod
```

Atveidojot `important` parādās treknrakstā, bet `say` — koda fontā. Kodi ligzdojas un tos var kombinēt, tāpēc `B<C<say>>` ir trekns kods.

Veselam koda blokam, nevis iekļautam fragmentam, izmantojiet norobežotu koda bloku — `=begin code … =end code` —, kas saglabā tekstu burtiski:

```raku
=begin pod

Here is how to call it:

=begin code
say greet('world');
=end code

=end pod
```

Rindas koda bloka iekšienē tiek parādītas tieši tā, kā uzrakstītas, netiekot uztvertas kā Pod. Ar iekļautajiem kodiem un koda blokiem Pod var dokumentēt API ar formatētu tekstu un izpildāmi izskatošiem piemēriem, un tas viss tiek turēts blakus kodam, ko apraksta.

{% include nav.html %}
