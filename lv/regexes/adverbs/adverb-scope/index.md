---
title: Apstākļa vārdu darbības joma
translations_gpt:
---

{% include menu.html %}

Apstākļvārdu `:i` var rakstīt divās vietās, un atšķirība ir tur, **kur tas stājas spēkā**. Uz operatora `m:i/…/` padara **visu** raksturu neatkarīgu no burtu lieluma. Rakstīts regulārās izteiksmes iekšienē, `:i` ir _pozicionāls_ — tas attiecas tikai no tās vietas, kur parādās, uz priekšu. Tas ļauj burtu lieluma likumu atslābināt tikai daļai raksturā:

```raku
say 'RAKU' ~~ /R :i aku/; # ｢RAKU｣
say 'raku' ~~ /R :i aku/; # Nil
```

Šeit vadošais `R` joprojām tiek piemeklēts, ņemot vērā burtu lielumu — tāpēc mazo burtu `raku` neizdodas —, kamēr `:i` padara neatkarīgu no burtu lieluma tikai to `aku`, kas seko. Turpretī ar `m:i/Raku/` katrs burts ir neatkarīgs no lieluma, tāpēc sakrīt gan `RAKU`, gan `raku`.

## Ierobežots ar grupu

Iekšēja apstākļvārda iedarbība ir ierobežota arī ar tā apņemošo grupu. Izteiksmē `/[:i abc]def/` burtu lielumu ignorē tikai `abc`; `def` aiz grupas tiek piemeklēts stingri:

```raku
say 'ABCdef' ~~ /[:i abc]def/; # ｢ABCdef｣
say 'ABCDEF' ~~ /[:i abc]def/; # Nil
```

## Apstākļvārda izslēgšana

Lai apstākļvārdu raksturā vidū izslēgtu atpakaļ, noliedziet to ar `!`. Tātad `:!i` no tās vietas atjauno jutību pret burtu lielumu:

```raku
say 'ABCdef' ~~ / :i abc :!i def /; # ｢ABCdef｣
say 'ABCDEF' ~~ / :i abc :!i def /; # Nil
```

`:i` atslābina burtu lieluma likumu priekš `abc`, un tad `:!i` to atliek atpakaļ, tāpēc `def` jāsakrīt precīzi. Grupēšana un `:!i` ir divi veidi, kā sasniegt to pašu mērķi: ierobežot apstākļvārdu ar tieši to raksturā daļu, kurai tas vajadzīgs. Tas pats ieslēgšanas un izslēgšanas slēdzis darbojas arī pārējiem raksturā iekšējiem apstākļvārdiem.

{% include nav.html %}
