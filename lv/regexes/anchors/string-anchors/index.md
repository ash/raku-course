---
title: Virknes sākums un beigas
translations_gpt:
---

{% include menu.html %}

Divi enkuri iezīmē virknes galus:

* `^` sakrīt pašā virknes **sākumā**
* `$` sakrīt pašās **beigās**

Izmantojiet `^`, lai pieprasītu, ka sakritība sākas virknes sākumā:

```raku
say so 'http://example' ~~ /^ http /; # True
say so 'see http://x'   ~~ /^ http /; # False
```

Otrā virkne satur `http`, taču ne sākumā, tāpēc noenkurotais raksturs neizdodas.

Liekot `^` un `$` ap raksturu, tas tiek piespiests sakrist ar **visu** virkni, neatstājot neko pāri ne vienā, ne otrā pusē:

```raku
say so 'hello'       ~~ /^ hello $/; # True
say so 'hello world' ~~ /^ hello $/; # False
```

Šis ir ļoti izplatīts pārbaudes paņēmiens — piemēram, «vai šī virkne ir tieši skaitlis?»:

```raku
say so '2025' ~~ /^ \d+ $/; # True
say so '20a5' ~~ /^ \d+ $/; # False
```

## Rindu enkuri

Kad virknē ir vairākas rindas, partneri `^^` un `$$` sakrīt **katras rindas** sākumā un beigās, nevis visas virknes. Atšķirība no `^` un `$` parādās, tiklīdz vajadzīgais teksts nav pirmajā rindā: vienkāršie enkuri redz tikai visu virkni un neizdodas, bet dubultotie sakrīt jebkurā rindā.

```raku
say so "cat\ndog" ~~ /^  dog  $/;  # False
say so "cat\ndog" ~~ /^^ dog $$/;  # True
```

Šeit `\n` sāk otro rindu. `^^` pieprasa, lai `dog` atrastos rindas sākumā, bet `$$` — rindas beigās; abi otrajā rindā izpildās, tāpēc dubultotie enkuri izdodas tur, kur vienkāršie nespēj.

{% include nav.html %}
