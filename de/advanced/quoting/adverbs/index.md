---
title: Quoting-Adverbien
---

{% include menu.html %}

Das Verhalten eines Quoting-Konstrukts kann mit _Adverbien_ angepasst werden. Jede Quoting-Funktion — Interpolation von Skalaren, Ausführung eingebetteter Closures, Verarbeitung von Backslashes — wird durch ein eigenes Adverb gesteuert, das diese eine Funktion ein- oder ausschaltet. So kannst du von `q` oder `Q` ausgehen und genau die Funktionen hinzufügen, die du brauchst.

Einige gebräuchliche Adverbien:

* `:s` / `:scalar` — interpoliert skalare Variablen (`$x`)
* `:c` / `:closure` — interpoliert eingebetteten Code in `{ … }`
* `:b` / `:backslash` — verarbeitet Backslash-Escape-Sequenzen wie `\n`

Füge eines zu `q` hinzu, um eine einzelne Funktion zu aktivieren. Zum Beispiel: eingebetteten Code erlauben, aber sonst nichts:

```raku
say q/result: {3 * 4}/;   # result: {3 * 4}  — plain q leaves the block untouched
say q:c/result: {3 * 4}/; # result: 12        — :c runs the block
```

Mit einfachem `q` wird `{ 3 * 4 }` wörtlich ausgegeben; erst `:c` lässt den Block ausführen und fügt seinen Wert ein, während eine `$variable` weiterhin unberührt bleibt. Beachte die `/…/`-Trennzeichen hier: Die Begrenzung des Strings mit `{…}` würde zwar funktionieren — der Compiler zählt die verschachtelten Klammern korrekt — aber dann wird das innere `{ 3 * 4 }` als Teil des begrenzten Textes gelesen und nicht als Closure, sodass `:c` es wörtlich lassen würde. Wenn der Text einen `{ … }`-Block enthält, wähle ein anderes Trennzeichen als `{…}`, damit die Closure tatsächlich ausgeführt wird. Du kannst skalare Interpolation zum ansonsten wörtlichen `Q` hinzufügen:

```raku
my $name = 'Anna';
say Q:s{Hi, $name}; # Hi, Anna
```

Adverbien können Funktionen auch **ausschalten**, und zwar mit einem `!`. Um `qq` zu verwenden, aber `$` wörtlich zu belassen:

```raku
my $price = 5;
say qq:!s{costs $price dollars}; # costs $price dollars
```

`qq` entspricht `Q` mit allen Interpolations-Adverbien eingeschaltet, und `q` entspricht `Q` mit einer kleineren Auswahl. Die Adverbien geben dir feinkörnige Kontrolle zwischen diesen beiden Extremen.

{% include nav.html %}
