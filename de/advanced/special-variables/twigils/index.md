---
title: Twigils
---

{% include menu.html %}

Ein _Twigil_ ist ein Zeichen, das zwischen dem Sigil und dem Namen einer Variablen steht. Es ändert nicht den Namen; es ändert, wie sich die Variable verhält und aufgelöst wird. Die gebräuchlichsten sind:

* `*` — eine **dynamische** Variable, z. B. `$*OUT`, wird über den Aufrufstapel aufgelöst
* `?` — ein **Kompilierzeit**-Wert, der vom Compiler bereitgestellt wird, z. B. `$?FILE`, `$?LINE`
* `!` — ein **privates** Attribut eines Objekts, z. B. `$!balance`
* `.` — ein Attribut, das über seine Accessor-Methode erreicht wird, z. B. `$.name`

Du bist bereits mehreren davon begegnet, ohne das Twigil beim Namen zu nennen: `$*OUT` und `$*IN` (dynamisch) sowie `$!`/`$.` im [Teil über Objekte](/de/oop).

Die vom Compiler bereitgestellten `?`-Variablen werden beim Kompilieren deines Programms befüllt:

```raku
say $?LINE; # the line number of this statement
say $?FILE; # the path of this source file
```

Jedes Twigil signalisiert auf einen Blick eine andere Art von Variable. Wenn du also `$*foo` liest, weißt du sofort, dass es dynamisch ist, und bei `$?foo`, dass es eine Kompilierzeit-Konstante ist. Das nächste Thema betrachtet [dynamische Variablen](/de/advanced/special-variables/dynamic-variables) im Detail, da sie sich ganz anders verhalten als die lexikalischen Variablen, die du bisher verwendet hast.

{% include nav.html %}
