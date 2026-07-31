---
title: Viktorīna — Reģistra ignorēšana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma? Raksturs ir lielajos burtos, bet teksts ir jauktos.

```raku
say 'Hello' ~~ /:i HELLO/;
```

{:.quiz}
1 | ｢Hello｣
0 | ｢HELLO｣
0 | True
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Apstākļvārds `:i` izslēdz lielo un mazo burtu atšķirību, un tas darbojas abos virzienos — šeit lielo burtu raksturs `HELLO` sakrīt ar jauktu burtu tekstu. Rezultāts ir sakritušais teksts tādā veidā, kā tas parādās virknē: `｢Hello｣`.

</div>

{% include nav.html %}
