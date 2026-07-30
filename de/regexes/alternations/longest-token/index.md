---
title: Längstes Token und erster Treffer
translations_gpt:
---

{% include menu.html %}

Wenn zwei Alternativen an derselben Stelle treffen könnten, wählt der Operator `|` diejenige, die das **längste** Stück Text trifft. Das nennt man _longest-token matching_:

```raku
say 'catdog' ~~ / cat | catdog /; # ｢catdog｣
```

Obwohl `cat` zuerst geschrieben steht und treffen würde, zieht `|` das längere `catdog` vor.

Manchmal wollen Sie das Gegenteil — die Alternativen in der geschriebenen Reihenfolge probieren und die **erste** nehmen, die trifft. Genau das tut der doppelte Strich `||`:

```raku
say 'catdog' ~~ / cat || catdog /; # ｢cat｣
```

Nun wird `cat` zuerst probiert und trifft, die Maschine hält also dort an und zieht `catdog` nie in Betracht.

Nehmen Sie `|` (längstes Token), wenn Sie unabhängig von der Reihenfolge den „besten“ Treffer wollen — das ist die übliche Wahl und diejenige, auf die sich Grammatiken stützen. Nehmen Sie `||` (erster Treffer), wenn die Reihenfolge der Alternativen bedeutsam ist und frühere gewinnen sollen.

{% include nav.html %}
