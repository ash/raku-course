---
title: Kompilators Rakudo
translations_gpt:
---

{% include menu.html %}

**Rakudo** ir Raku atsauces implementācija un kompilators, ko izmanto šis kurss. Šodien tas ir vispilnīgākais un praksē visvairāk pārbaudītais veids, kā palaist Raku, tāpēc, kad runā par «Raku kompilatoru», parasti domāts tieši Rakudo.

Rakudo pats lielākoties ir uzrakstīts Raku valodā kopā ar nelielu sāknēšanas valodu NQP («Not Quite Perl»). Tas kompilē jūsu programmu baitkodā un izpilda to virtuālajā mašīnā **MoarVM**, ko iegūstat automātiski, instalējot Rakudo. Tā kā Rakudo tiecas aptvert visu valodu, tā ir drošākā izvēle, kad nepieciešams, lai darbotos ikviens Raku nostūris.

Rakudo implementē Raku 6.d un tiek izlaists bieži, tāpēc labojumi un jaunas iespējas jūs sasniedz ātri.

## Virtuālā mašīna

Pēc noklusējuma Rakudo darbojas uz MoarVM — virtuālās mašīnas, kas veidota tieši Raku vajadzībām. Uzbūve nepiesaista Rakudo vienai mašīnai — to var būvēt arī uz citu virtuālo mašīnu pamata —, taču MoarVM ir standarta un labi atbalstītais mērķis, un šis kurss to pieņem par pamatu. Tā ir galvenā atšķirība no [Raku++](/lv/essentials/the-rakupp-compiler), kas ir uzrakstīts C++ valodā un kam sava virtuālā mašīna nav vajadzīga.

## Pirmkods un saites

Rakudo ir atvērtā koda projekts, un tā izstrāde notiek atklāti:

* [rakudo.org](https://rakudo.org)
* [Rakudo GitHub](https://github.com/rakudo/rakudo)
* [moarvm.org](https://moarvm.org)

{% include nav.html %}
