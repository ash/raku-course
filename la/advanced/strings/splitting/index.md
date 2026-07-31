---
title: Dividendo et coniungendo
---

{% include menu.html %}

Chordae pluribus modis in partes frangi et retro coniungi possunt.

Methodus `words` chordam in indicem verborum spatio separatorum dividit:

```raku
say 'Hello big World'.words; # (Hello big World)
```

Methodus `split` chordam ad separatorem quem eligis frangit:

```raku
say 'a,b,c'.split(','); # (a b c)
```

Casus specialis notandus est divisio per **chordam vacuam** `''`: chordam in singulos characteres frangit, sed etiam chordam vacuam ad ipsum initium et ipsum finem inserit, itaque eventus duo elementa plus habet quam expectares:

```raku
say 'abc'.split('').elems;        # 5 — the three letters, plus an empty string at each end
say 'abc'.split('', :skip-empty); # (a b c) — the :skip-empty adverb drops the empties
```

Ut in characteres dividas, methodus `comb`, sine argumentis vocata, hoc directe facit — sine vacuis residuis purgandis:

```raku
say 'Raku'.comb; # (R a k u)
```

Ut contrario modo procedas, methodus `join` indicem valorum in unam chordam conglutinat, separatorem inter eos ponens:

```raku
say <a b c>.join('-'); # a-b-c
```

Duae aliae methodi in partibus chordae operantur. Methodus `substr` partem extrahit, data positione initiali et, optionaliter, longitudine:

```raku
say 'Hello World'.substr(0, 5); # Hello
say 'Hello World'.substr(6);    # World
```

Et `trim` spatia alba ab utrisque finibus chordae removet:

```raku
say '  hi  '.trim; # hi
```

{% include nav.html %}
