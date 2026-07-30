---
title: Bedeutsamer Leerraum
translations_gpt:
---

{% include menu.html %}

Innerhalb eines Regex werden Leerzeichen gewöhnlich übergangen — sie stehen nur dort, um das Muster lesbar zu machen. Deshalb trifft `/foo bar/` den Text `foobar`. Manchmal wollen Sie aber wirklich, dass ein Leerzeichen im Muster „hier steht Leerraum“ bedeutet. Genau das tut das Adverb `:s` (kurz für `:sigspace`, „significant space“):

```raku
say so 'foo    bar' ~~ /:s foo bar/; # True
say so 'foobar'     ~~ /:s foo bar/; # False
```

Mit `:s` verlangt das Leerzeichen zwischen `foo` und `bar` im Muster Leerraum zwischen den beiden Wörtern in der Zeichenkette. Ein oder mehrere Leerzeichen (oder Tabulatoren) zählen alle, die Folge von Leerzeichen in `'foo    bar'` trifft also.

Bedeutsamer Leerraum wird vor allem bei Grammatiken wichtig, wo er Ihnen erlaubt, Muster zu schreiben, die sich wie die Sprache lesen, die Sie zerlegen. Sie begegnen ihm wieder als Unterschied zwischen einem `token` und einer `rule`.

{% include nav.html %}
