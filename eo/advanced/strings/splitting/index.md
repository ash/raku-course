---
title: Disigo kaj kunigo
translations_gpt:
---

{% include menu.html %}

Ĉenoj povas esti rompitaj en partojn kaj remetitaj kune en pluraj manieroj.

La metodo `words` disigas ĉenon en liston de ĝiaj vortoj apartigitaj per blankspaco:

```raku
say 'Hello big World'.words; # (Hello big World)
```

La metodo `split` rompas ĉenon ĉe apartigilo, kiun vi elektas:

```raku
say 'a,b,c'.split(','); # (a b c)
```

Grava speciala kazo estas disigo laŭ la **malplena ĉeno** `''`: ĝi rompas ĉenon en ĝiajn unuopajn signojn, sed ĝi ankaŭ enŝovas malplenan ĉenon tute komence kaj tute fine, do la rezulto havas du elementojn pli ol vi eble atendus:

```raku
say 'abc'.split('').elems;        # 5 — la tri literoj, plus malplena ĉeno ĉe ĉiu fino
say 'abc'.split('', :skip-empty); # (a b c) — la adverbo :skip-empty forigas la malplenajn
```

Por disigi en signojn, la metodo `comb`, vokita sen argumentoj, faras tion rekte — sen vagaj malplenaĵoj por purigi:

```raku
say 'Raku'.comb; # (R a k u)
```

Por iri la alian direkton, la metodo `join` gluas liston de valoroj en unu solan ĉenon, metante apartigilon inter ilin:

```raku
say <a b c>.join('-'); # a-b-c
```

Du pliaj metodoj laboras sur partoj de ĉeno. La metodo `substr` eltiras pecon, donite komencan pozicion kaj, laŭvole, longecon:

```raku
say 'Hello World'.substr(0, 5); # Hello
say 'Hello World'.substr(6);    # World
```

Kaj `trim` forigas blankspacon de ambaŭ finoj de ĉeno:

```raku
say '  hi  '.trim; # hi
```

{% include nav.html %}
