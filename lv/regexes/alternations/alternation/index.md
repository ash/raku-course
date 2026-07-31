---
title: Alternatīva
translations_gpt:
---

{% include menu.html %}

Atdaliet divas vai vairākas alternatīvas ar vertikālu svītru `|`. Raksturs sakrīt, ja sakrīt **kaut viena** no tām:

```raku
say 'no thanks' ~~ / yes | no /; # ｢no｣
```

Raksturs izmēģināja `yes` un `no`; virkne satur `no`, tāpēc tas arī sakrita.

Alternatīvu var uzskaitīt tik, cik vēlaties:

```raku
say 'the sky is blue' ~~ / red | green | blue /; # ｢blue｣
```

Alternatīvas var būt jebkurš apakšraksturs, ne tikai burtiski vārdi — tajās var būt rakstzīmju klases, kvantori un tvērumi. Lai alternatīvu noturētu kopā lielāka raksturā iekšienē, sagrupējiet to ar kvadrātiekavām `[ ]`, kas [grupē **bez** tveršanas](/lv/regexes/captures/non-capturing):

```raku
say 'cathouse' ~~ / [ cat | dog ] house /; # ｢cathouse｣
```

Šeit alternatīva `cat | dog` ir viena vienība, un tai jāseko `house`.

{% include nav.html %}
