---
title: Ievade ar uzvedni
---

{% include menu.html %}

Pretstats `say` ir `prompt`. Tas gaida, kad lietotājs kaut ko ievada un nospiež Enter. Pēc tam tas nosūta ievadi programmai kā virkni. Jūs varat ņemt `prompt` rezultātu un nodot to `say`. Šajā gadījumā jūs atkārtojat to, ko lietotājs ievada. Izveidosim šādu programmu:

```raku
say prompt;
```

Ja jūs palaidīsiet šo programmu, jūs varat būt apjucis, jo programma nonāk stāvoklī, kurā tā tikai gaida jebkādu ievadi. Lai padarītu programmu lietotājam draudzīgāku, ir labi izdrukāt uzvednes ziņojumu. Jums nav nepieciešams pievienot atsevišķu `say`, jo jūs varat nodot ziņojumu `prompt`:

```raku
prompt 'Kādu valodu jūs plānojat mācīties? '
```

Pirms noslēgt šo sadaļu, apvienosim visas daļas un izveidosim programmu, kas jautā par lietotāja vēlmēm un pēc tam izdrukā frāzi, izmantojot tekstu, ko lietotājs ievadījis.

```raku
say 'Jūs plānojat mācīties ', prompt 'Kādu valodu jūs plānojat mācīties? ';
```

Ja jūs ievadījāt `Raku`, jūs saņemsiet šādu frāzi:

    Jūs plānojat mācīties Raku

Labi, mēs tagad varam sarunāties ar programmu, un mēs varam likt programmai sarunāties ar mums!

Ņemiet vērā, ka tā kā `say` ir jāzina virknes pirms to izdrukāšanas, Raku vispirms izpildīs `prompt`, tāpēc dialogs notiek pareizā secībā:

```console
$ raku t.raku 
Kādu valodu jūs plānojat mācīties? Raku
Jūs plānojat mācīties Raku
```

{% include nav.html %}