---
title: Matching goloso e frugale
translations_gpt:
---

{% include menu.html %}

Per impostazione predefinita un quantificatore è _goloso_: riconosce quanto più può, pur lasciando riuscire il resto dello schema. Considera il riconoscimento dal primo `<` a un `>`:

```raku
say '<a><b>' ~~ / '<' .+ '>' /; # ｢<a><b>｣
```

Il `.+` ha inghiottito quanto poteva, fino all'**ultimo** `>`, quindi la corrispondenza attraversa entrambe le coppie di parentesi.

Per rendere un quantificatore _frugale_ (detto anche _pigro_ o _non goloso_), aggiungi un `?` dopo di esso. Un quantificatore frugale riconosce quanto **meno** possibile:

```raku
say '<a><b>' ~~ / '<' .+? '>' /; # ｢<a>｣
```

Ora `.+?` si ferma al **primo** `>`, quindi corrisponde solo il primo pezzo fra parentesi.

Il suffisso `?` funziona su qualunque quantificatore: anche `*?` e `**?` sono frugali. Le versioni golosa e frugale riconoscono gli stessi generi di testo — differiscono solo per quanto prendono quando c'è una scelta.

{% include nav.html %}
