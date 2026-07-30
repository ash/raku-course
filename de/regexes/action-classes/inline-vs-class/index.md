---
title: Inline-Aktionen gegen Aktionsklassen
translations_gpt:
---

{% include menu.html %}

Sie haben nun zwei Wege, einer Zerlegung Bedeutung zu geben. Welchen sollten Sie nehmen?

**Inline-Aktionen** setzen einen Block `{ make … }` unmittelbar in das Token:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}
```

Sie sind schnell geschrieben und für eine winzige Grammatik oder ein einmaliges Skript völlig in Ordnung. Der Preis ist, dass Muster und Logik ineinander verwoben sind.

**Eine Aktionsklasse** hält beides auseinander — die Grammatik beschreibt die Form, die Aktionsklasse die Bedeutung:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

Diese Trennung bringt echte Vorteile, sobald eine Grammatik wächst: Das Muster bleibt lesbar, und Sie können **eine Grammatik mit mehreren Aktionsklassen** verbinden — eine, die auswertet, eine, die hübsch ausgibt, eine, die eine Datenstruktur baut —, ohne die Grammatik anzurühren.

Die Faustregel: Inline-Aktionen für etwas Kleines und Wegwerfbares, eine Aktionsklasse für alles, was Sie pflegen oder wiederverwenden werden.

{% include nav.html %}
