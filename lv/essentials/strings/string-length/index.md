---
title: Virknes garums Raku
---

{% include menu.html %}

Virkņu Unicode daba padara dažas triviālas lietas nedaudz sarežģītākas. Vai, vismaz, jums jādomā par to kā par mazāk vienkāršu tēmu. Piemēram, ņemiet virknes garumu. Vai tas ir rakstzīmju skaits, vai tas ir baitu skaits? Vai arī, ja tā pati rakstzīme ir sadalīta dažādi dažādās virknēs, vai tā joprojām ir viena rakstzīme?

## Garums rakstzīmēs

Lai iegūtu virknes garumu rakstzīmēs, izmantojiet `chars` _metodi_:

```raku
my $str = '你好世界';
say $str.chars;
```

Lai gan mēs runāsim par metodēm vēlāk, mums jau vajadzētu būt spējīgiem tās izmantot. Raku valodā jūs varat izsaukt metodes gandrīz uz katra objekta, ieskaitot virknes un skalārus mainīgos. Lai izsauktu metodi, izmantojiet punktu. Tātad, šeit mēs redzam metodi, kas tiek izsaukta uz mainīgā, kas satur virkni: `$str.chars`.

Šajā ķīniešu sveicienā 你好世界 ir četras rakstzīmes. Un `$str.chars` atgriež tieši `4`.

## Garums baitos

Tikai atsauces nolūkos, šeit ir veids, kā iegūt virknes garumu baitos. Šajā gadījumā ir svarīgi zināt, kura kodēšana tiek izmantota, lai saglabātu virkni:

```raku
my $str = '你好世界';
say $str.encode('UTF-8').bytes;
```

Šoreiz programma izdrukā `12`. Ņemiet vērā, ka otrajā rindā mums ir divi saistīti metožu izsaukumi.

## Garums koda punktos

Pilnības labad, šeit ir vēl viena noderīga metode, kas arī attiecas uz virknes garumiem: `codes`. Tā atgriež koda punktu skaitu virknē pēc tās normalizēšanas. Daudzos gadījumos `codes` un `chars` atgriež to pašu. Tomēr dažos retos gadījumos, piemēram, kad esat izveidojis 'neiespējamu' rakstzīmi, kurai nav viena koda punkta visā Unicode telpā, metodes dod atšķirīgus rezultātus.

```raku
say 'x̨'.chars;
say 'x̨'.codes;
```

Šai rakstzīmei, `x̨`, nav īpaša koda punkta un to var konstruēt tikai no divām daļām: mazā burta `x` un kombinējošās rakstzīmes `0x0328`. Tātad, joprojām ir viena rakstzīme, bet divi koda punkti. Tātad, programma izdrukā:

    1
    2

{% include nav.html %}