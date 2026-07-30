---
title: Bedeutsame Leerzeichen in Rules
translations_gpt:
---

{% include menu.html %}

Eine `rule` ist ein `token` mit einer zusätzlich eingeschalteten Möglichkeit: `:sigspace` (bedeutsamer Leerraum), genau dem Adverb `:s`. Es verwandelt den Leerraum, den Sie im Muster schreiben, in einen selbsttätigen Leerraum-Treffer zwischen den Teilen. Genau das wollen Sie, wann immer der zu zerlegende Text Leerzeichen zwischen seinen Stücken hat.

Vergleichen Sie beides. In einem `token` wird Leerraum im Muster **übergangen**, `<first> <second>` verlangt also die beiden Teile ohne irgendetwas dazwischen. Da `\w+` am Leerzeichen anhält, trifft eine Eingabe mit Leerzeichen nicht:

```raku
grammar WithToken {
    token TOP    { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithToken.parse('foo bar').defined; # False
```

Sie *können* das Leerzeichen in einem `token` annehmen — Sie müssen es nur selbst treffen, etwa mit `\s+`:

```raku
token TOP { <first> \s+ <second> }      # now 'foo bar' parses
```

Eine `rule` fügt dieses Leerraum-Treffen für Sie ein, ein schlichtes Leerzeichen zwischen den Teilen genügt also:

```raku
grammar WithRule {
    rule TOP     { <first> <second> }
    token first  { \w+ }
    token second { \w+ }
}

say WithRule.parse('foo bar').defined; # True
```

Ein verbreitetes Vorgehen ist, `rule` für den übergeordneten Aufbau zu nehmen — wo die Teile durch Leerzeichen getrennt sind — und `token` für die kleinen Stücke wie Namen und Zahlen, die keine Leerzeichen enthalten. Das hält Ihre Grammatik zugleich richtig und gut lesbar.

{% include nav.html %}
