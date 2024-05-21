---
title: 'Quiz: Rationale Zahlen'
---

{% include menu.html %}

Wählen Sie die Zahlen aus, die in Raku `Rat` sind.

<!--0 | ↉ | Dies ist eine `Int` Zahl, und ihr Wert ist `0`.-->

{:.quiz}
1 | 3/64 | Dies ist eine `Rat` Zahl, keine Division von zwei ganzen Zahlen.
1 | ⅞
1 | 2.718281828459045 | Das ist ein Näherungswert der Eulerschen Konstante, aber dies ist immer noch eine `Rat`, da sie nicht unendlich lang ist.
1 | 10_230/50_245 | Sie können hier auch den `_` Trennzeichen verwenden.
1 | 10.345_678 | Und hier.
0 | 10.345,678 | Ein Komma hier ist weder ein Dezimalkomma noch ein Trennzeichen.
1 | <33/44> | Eine andere Form, rationale Zahlen in Raku zu schreiben.
0 | <33 44> | Dies ist eine Liste von Zeichenketten (wir werden es später im Kurs sehen).
0 | &apos;<33 44>&apos; | Dies ist eine Zeichenkette.
1 | ⅞/⅚ | Dies ist eine Division von zwei `Rat` Zahlen, aber das Ergebnis ist auch eine `Rat` Zahl.

{% include quiz.html %}

{% include nav.html %}