---
title: q, qq und Q
---

{% include menu.html %}

Es gibt drei grundlegende Quoting-Operatoren, die sich darin unterscheiden, wie viel sie den Text im Inneren verarbeiten:

* `q` — wie einfache Anführungszeichen: fast alles ist wörtlich
* `qq` — wie doppelte Anführungszeichen: Variablen und Escape-Sequenzen werden interpoliert
* `Q` — die wörtlichste Form von allen: **nichts** wird verarbeitet

Jeder nimmt den Text zwischen einem Paar von Trennzeichen. Das vertraute `'…'` ist eine Kurzform für `q`, und `"…"` ist eine Kurzform für `qq`:

```raku
my $name = 'Anna';

say q{Hello $name};  # Hello $name
say qq{Hello $name}; # Hello Anna
```

`q` lässt `$name` unberührt; `qq` interpoliert es. Backslash-Escape-Sequenzen wie `\n` verhalten sich genauso: Nur `qq` (und `"…"`) wandelt `\n` in einen echten Zeilenumbruch um, während sowohl `q` als auch `Q` es als die zwei Zeichen `\` und `n` belassen:

```raku
say qq{line\nbreak}; # line<newline>break
say q{line\nbreak};  # line\nbreak
say Q{line\nbreak};  # line\nbreak
```

Wo unterscheiden sich dann `q` und `Q`? `q` verarbeitet, wie einfache Anführungszeichen, noch eine *kleine* Menge von Escape-Sequenzen — ein verdoppelter Backslash `\\` wird zu einem, und du kannst das schließende Trennzeichen escapen — während die einfache `Q`-Form **gar nichts** verarbeitet:

```raku
say q{a\\b}; # a\b   — q collapses the escaped backslash
say Q{a\\b}; # a\\b  — Q keeps both characters
```

Du kannst beliebige Trennzeichen wählen — `q{…}`, `q[…]`, `q/…/`, `q!…!` — was praktisch ist, wenn der Text selbst Anführungszeichen enthält. Die drei Operatoren sind die Grundlage; das nächste Thema zeigt, wie [_Adverbien_](/de/advanced/quoting/adverbs) es dir ermöglichen, genau die gewünschten Funktionen zu kombinieren.

{% include nav.html %}
