---
title: Geltungsbereich eines Adverbs
translations_gpt:
---

{% include menu.html %}

Das Adverb `:i` lässt sich an zwei Stellen schreiben, und der Unterschied liegt darin, **wo es wirkt**. Am Operator macht `m:i/…/` das **ganze** Muster schreibungsunabhängig. Innerhalb des Regex geschrieben ist `:i` _positionsgebunden_ — es gilt nur ab der Stelle, an der es steht. Damit können Sie die Schreibungsregel für nur einen Teil eines Musters lockern:

```raku
say 'RAKU' ~~ /R :i aku/; # ｢RAKU｣
say 'raku' ~~ /R :i aku/; # Nil
```

Hier wird das vorangehende `R` weiterhin schreibungsabhängig getroffen — kleingeschriebenes `raku` scheitert also —, während `:i` nur das darauffolgende `aku` schreibungsunabhängig macht. Bei `m:i/Raku/` ist dagegen jeder Buchstabe schreibungsunabhängig, es treffen also sowohl `RAKU` als auch `raku`.

## Auf eine Gruppe beschränkt

Die Wirkung eines inneren Adverbs ist außerdem auf seine umgebende Gruppe beschränkt. In `/[:i abc]def/` übergeht nur `abc` die Schreibung; das `def` hinter der Gruppe wird streng getroffen:

```raku
say 'ABCdef' ~~ /[:i abc]def/; # ｢ABCdef｣
say 'ABCDEF' ~~ /[:i abc]def/; # Nil
```

## Ein Adverb abschalten

Um ein Adverb mitten im Muster wieder abzuschalten, verneinen Sie es mit einem `!`. `:!i` stellt also ab dieser Stelle die Schreibungsabhängigkeit wieder her:

```raku
say 'ABCdef' ~~ / :i abc :!i def /; # ｢ABCdef｣
say 'ABCDEF' ~~ / :i abc :!i def /; # Nil
```

`:i` lockert die Schreibungsregel für `abc`, dann setzt `:!i` sie wieder in Kraft, sodass `def` genau treffen muss. Gruppieren und `:!i` sind zwei Wege zum selben Ziel: ein Adverb auf genau den Teil des Musters zu beschränken, der es braucht. Derselbe Ein-Aus-Schalter funktioniert auch bei den übrigen Adverbien im Muster.

{% include nav.html %}
