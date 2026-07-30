---
title: Treffen ohne Rücksicht auf Groß- und Kleinschreibung
translations_gpt:
---

{% include menu.html %}

Normalerweise unterscheidet ein Regex Groß- von Kleinbuchstaben: `/hello/` trifft `HELLO` nicht. Das Adverb `:i` (kurz für `:ignorecase`) schaltet diese Unterscheidung ab:

```raku
say 'HELLO' ~~ /:i hello/; # ｢HELLO｣
```

Mit `:i` treffen die Buchstaben unabhängig von ihrer Schreibung, das kleingeschriebene Muster trifft also den großgeschriebenen Text. Es funktioniert in beide Richtungen und auch bei gemischter Schreibung:

```raku
say 'I use RAKU' ~~ /:i raku/; # ｢RAKU｣
```

Sie können das Adverb auch am Operator `m///` statt im Muster schreiben:

```raku
say 'HELLO' ~~ m:i/hello/; # ｢HELLO｣
```

Beides lässt das **ganze** Muster die Schreibung übergehen. Die [nächste Seite](/de/regexes/adverbs/adverb-scope) betrachtet genauer, *wo* ein Adverb gilt — den Unterschied zwischen den beiden Stellungen — und wie Sie die Unterscheidung für einen Teil des Musters wieder einschalten.

{% include nav.html %}
