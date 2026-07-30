---
title: Alternation
translations_gpt:
---

{% include menu.html %}

Trennen Sie zwei oder mehr Alternativen durch einen senkrechten Strich `|`. Das Muster trifft, wenn **eine** von ihnen trifft:

```raku
say 'no thanks' ~~ / yes | no /; # ｢no｣
```

Das Muster hat `yes` und `no` probiert; die Zeichenkette enthält `no`, das ist also der Treffer.

Sie können so viele Alternativen aufführen, wie Sie möchten:

```raku
say 'the sky is blue' ~~ / red | green | blue /; # ｢blue｣
```

Alternativen können beliebige Teilmuster sein, nicht nur wörtliche Wörter — sie dürfen Zeichenklassen, Quantoren und Captures enthalten. Um eine Alternation innerhalb eines größeren Musters zusammenzuhalten, gruppieren Sie sie mit eckigen Klammern `[ ]`, die [**ohne** Capture gruppieren](/de/regexes/captures/non-capturing):

```raku
say 'cathouse' ~~ / [ cat | dog ] house /; # ｢cathouse｣
```

Hier ist die Alternation `cat | dog` eine Einheit, auf die `house` folgen muss.

{% include nav.html %}
