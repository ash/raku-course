---
title: Izvade ar say
---

{% include menu.html %}

Funkcija `say` (vai apakšprogramma, vai vienkārši programma) izdrukā vērtības uz standarta izvades straumi, `STDOUT`. Ja jūs palaidat programmu no termināļa, izvade parādās tur. Ja izmantojat tiešsaistes pakalpojumus, izvade tiek nosūtīta uz īpašu tīmekļa lapas apgabalu.

Šeit ir piemērs, kā izmantot `say`:

```raku
say 42;
```

Šī rinda var būt daļa no lielākas programmas vai būt visa programma pati par sevi. Tā acīmredzami izdrukā `42` uz izvades.

Tagad strādāsim ar virkni:

```raku
say 'Hello, World!';
```

Voilà, mēs redzam `Hello, World!` uz ekrāna.

Funkcija `say` var pieņemt vairāk nekā vienu argumentu, tāpēc mēs varam izdrukāt vairākas vērtības vienā reizē:

```raku
say 42, 'Hello, World!';
```

Vienkārši ņemiet vērā, ka šīs izvades daļas tiek apvienotas vienā virknē: `42Hello, World!`, tāpēc labāk ir pievienot atstarpi starp tām. Un jums vajadzētu būt iespējai atrisināt šo problēmu, piemēram, šādi:

```raku
say 42, ' ', 'Hello, World!';
```

Pēc visu argumentu izdrukāšanas funkcija `say` pievieno jaunas rindas rakstzīmi izvadei.

{% include nav.html %}