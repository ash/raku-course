---
title: Der Match-Baum
translations_gpt:
---

{% include menu.html %}

Ein Grammatiktreffer ist ein Baum. Der oberste Treffer hat einen benannten Eintrag für jedes Token, das `TOP` verwendet hat, und diese Einträge sind selbst Match-Objekte mit eigenen Captures. Sie bewegen sich mit derselben `<name>`-Schreibweise durch den Baum, die Sie für benannte Captures verwenden:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \d+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

Jeder Zweig ist ein vollständiges Match-Objekt, Sie können ihn also nach seinem `.Str`, seiner Position oder einer Umwandlung fragen. Hier besteht der Wert aus Ziffern, ihn in eine echte Zahl zu verwandeln ist also nur ein Methodenaufruf:

```raku
say $m<value>.Int; # 5
```

Bei tieferen Grammatiken hat der Baum mehr Ebenen — `$m<a><b>` erreicht ein Token `b`, das innerhalb eines Tokens `a` verwendet wurde. So durch den Baum zu gehen funktioniert, wird aber jenseits weniger Felder unhandlich. Das nächste Thema zeigt einen saubereren Weg, an jeden Treffer den Wert zu hängen, den Sie tatsächlich wollen.

{% include nav.html %}
