---
title: Mehrzeilige Kommentare
---

{% include menu.html %}

Sobald Sie einen Kommentar hinterlassen möchten, der größer als eine einzelne Zeile ist, können Sie entweder einige einzeilige Kommentare oder einen einzigen mehrzeiligen Kommentar verwenden.

Mehrzeilige Kommentare beginnen mit einer zweistelligen Kombination ``#` `` und werden von einem Paar einschließender Zeichen `( )`, `{ }`, `[ ]` oder deren wiederholten Kopien gefolgt: `(( ))`, `[[[ ]]]` usw.

Zum Beispiel:

```raku
my $name;
#`( Wir werden den Benutzer fragen,
seinen Namen einzugeben, und dann
die Eingabe in einer Variablen speichern. )

$name = prompt 'Wie heißt du? ';
#`{ Das Programm wartet jetzt,
bis der Benutzer den Namen eingibt
und Enter drückt. }

say $name; #`( Und jetzt können wir es ausdrucken )
```

{% include nav.html %}