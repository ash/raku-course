---
title: Fāzeri
translations_gpt:
---

{% include menu.html %}

_Fāzeris_ (phaser) ir īpašs bloks, kas izpildās automātiski noteiktā programmas dzīves brīdī, nevis tur, kur tas parādās pirmkodā. Jūs neizsaucat fāzeri; jūs tikai norādāt, _kad_ tā kodam jāizpildās, nosaucot bloku.

Visbiežāk lietotie fāzeri atzīmē programmas posmus kopumā:

* `BEGIN` izpildās pēc iespējas agrāk, kamēr programma vēl tiek kompilēta;
* `INIT` izpildās vienu reizi izpildes sākumā, pirms galvenā koda;
* `END` izpildās vienu reizi pašās beigās, pēc tam, kad galvenais kods ir pabeigts.

Šī programma izvieto šos fāzerus starp parastajiem izteikumiem. Ievērojiet, ka izvade neseko rindu secībai failā:

```raku
say 'main body';
BEGIN say 'BEGIN';
END say 'END';
INIT say 'INIT';
```

Programma izdrukā:

```
BEGIN
INIT
main body
END
```

`BEGIN` izpildās pirmais, kompilācijas laikā. Pēc tam izpildes laikā `INIT` izpildās pirms galvenā koda. Galvenais kods izdrukājas nākamais, un `END` izpildās pēdējais neatkarīgi no tā, kur tas tika uzrakstīts.

Bieži `END` lieto, lai izdrukātu kopsavilkumu vai iztīrītu kaut ko pirms programmas iziešanas, savukārt `BEGIN` ir noderīgs darbam, kam jānotiek pirms visa pārējā.

{% include nav.html %}
