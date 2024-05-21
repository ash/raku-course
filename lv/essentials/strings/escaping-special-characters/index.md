---
title: Speciālo rakstzīmju izvairīšanās Raku virknēs
---

{% include menu.html %}

Iedomājieties, ka vēlaties izdrukāt cenu zīmi, un jūs saglabājat gan produkta nosaukumu, gan tā cenu skalārajos mainīgajos?

```raku
my $product = 'Electricity';
my $price = 3.14;
```

Kā izdrukāt zīmi, ja cena ir domāta dolāros? Paredzētā izvade ir: `Electricity costs $3.14`. Dolāra zīme dubultajās pēdiņās ir mainīgā interpolācijas indikators. Lai izdrukātu pašu `$` rakstzīmi, jums tā jāizvairās:

```raku
say "$product costs \$$price";
```

Protams, jūs varat izmantot virknes savienošanu un izvairīties no `$` izvairīšanās:

```raku
say $product ~ ' costs $' ~ $price;
```

Šis variants izdrukā tieši tādu pašu virkni, bet interpolācija izskatās dabiskāk un ir vieglāk lasāma. Ņemiet vērā, ka `$` rakstzīme netika interpolēta vai izvairīta vienkāršajās pēdiņās: `' costs $'`. Tā ir galvenā atšķirība. Speciālās rakstzīmes vienkāršajās pēdiņās parādās tādas, kādas tās ir.

Šeit ir vēl dažas speciālās rakstzīmes, kurām dubultajās pēdiņās ir īpaša nozīme:

`\$` | Dolāra zīme
`\n` | Jauna rinda
`\r` | Karietes atgriešana
`\t` | Horizontāla tabulācija
`\"` | Dubultā pēdiņa
`\\` | Atpakaļslīpsvītra

Tas, kā jūs citējat virkni, nosaka, kā Raku apstrādā speciālās rakstzīmes. Apsveriet šos divus piemērus:

```raku
say 'One\nTwo';
say "Three\nFour";
```

Ja jūs palaidīsiet šo programmu, jūs redzēsiet, ka pirmā virkne parādās tāda, kāda tā ir vienā rindā. Otrā virkne tika sadalīta divās daļās:

    One\nTwo
    Three
    Four

Dubultajās pēdiņās speciālā secība `\n` tika apstrādāta kā jaunas rindas rakstzīme, savukārt virknei vienkāršajās pēdiņās tā bija parasta divu rakstzīmju secība: `\` un `n`.

Ir interesants izņēmums priekš `'` un `\`. Vienkāršajās pēdiņās jūs varat izvairīties no vienkāršās pēdiņas, pievienojot tai priekšā vēl vienu `\`:

```raku
say '\''; # '
```

Arī atpakaļslīpsvītra ir jāizvairās, ja tai seko vienkāršā pēdiņa:

```raku
say 'a\b\c\\'; # a\b\c\
```

{% include nav.html %}