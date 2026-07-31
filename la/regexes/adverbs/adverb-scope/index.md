---
title: Ambitus adverbiorum
translations_gpt:
---

{% include menu.html %}

Adverbium `:i` duobus locis scribi potest, et differentia est **ubi valeat**. In operatore, `m:i/…/` **totum** exemplar litteras neglegere facit. Intra regex scriptum, `:i` _positionale_ est — solum ab eo puncto ubi apparet in posterum valet. Hoc tibi permittit regulam litterarum pro sola parte exemplaris laxare:

```raku
say 'RAKU' ~~ /R :i aku/; # ｢RAKU｣
say 'raku' ~~ /R :i aku/; # Nil
```

Hic prima `R` adhuc cum ratione litterarum congruitur — itaque minusculum `raku` deficit — dum `:i` solam `aku` sequentem sine ratione litterarum reddit. Cum `m:i/Raku/`, contra, omnis littera sine ratione magnitudinis est, itaque et `RAKU` et `raku` congruunt.

## Intra gregem inclusum

Effectus adverbii interni etiam intra gregem ambientem clauditur. In `/[:i abc]def/` sola `abc` litteras neglegit; `def` post gregem stricte congruitur:

```raku
say 'ABCdef' ~~ /[:i abc]def/; # ｢ABCdef｣
say 'ABCDEF' ~~ /[:i abc]def/; # Nil
```

## Adverbium exstinguere

Ut adverbium in medio exemplari rursus exstinguas, illud per `!` nega. Itaque `:!i` rationem litterarum ab illo puncto restituit:

```raku
say 'ABCdef' ~~ / :i abc :!i def /; # ｢ABCdef｣
say 'ABCDEF' ~~ / :i abc :!i def /; # Nil
```

`:i` regulam litterarum pro `abc` laxat, deinde `:!i` eam reponit ita ut `def` exacte congruere debeat. Gregatio et `:!i` duae viae sunt ad idem propositum: adverbium ad solam eam exemplaris partem quae eo eget coercere. Idem interruptor pro ceteris adverbiis intra exemplar operatur.

{% include nav.html %}
