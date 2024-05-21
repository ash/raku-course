---
title: Eingabe mit Aufforderung
---

{% include menu.html %}

Das Gegenteil von `say` ist `prompt`. Es wartet, bis der Benutzer etwas eingibt und Enter drückt. Dann sendet es die Eingabe als Zeichenkette an das Programm. Sie können das Ergebnis von `prompt` nehmen und an `say` übergeben. In diesem Fall geben Sie das ein, was der Benutzer eingibt. Lassen Sie uns ein solches Programm erstellen:

```raku
say prompt;
```

Wenn Sie dieses Programm ausführen, könnten Sie verwirrt sein, da das Programm in einen Zustand übergeht, in dem es nur auf eine Eingabe wartet. Um das Programm benutzerfreundlicher zu gestalten, ist es gut, die Eingabeaufforderung zu drucken. Sie müssen kein separates `say` hinzufügen, da Sie die Nachricht an `prompt` übergeben können:

```raku
prompt 'Welche Sprache wirst du lernen? '
```

Bevor wir diesen Abschnitt abschließen, lassen Sie uns alle Teile kombinieren und ein Programm erstellen, das nach den Wünschen des Benutzers fragt und dann einen Satz mit dem vom Benutzer eingegebenen Text druckt.

```raku
say 'Du wirst ', prompt 'Welche Sprache wirst du lernen? ', ' lernen';
```

Wenn Sie `Raku` eingegeben haben, erhalten Sie den folgenden Satz gedruckt:

    Du wirst Raku lernen

Ok, wir können jetzt mit dem Programm sprechen, und wir können das Programm mit uns sprechen lassen!

Beachten Sie, dass `say` die Zeichenketten kennen muss, bevor es sie druckt. Raku wird daher zuerst `prompt` ausführen, sodass der Dialog in der richtigen Reihenfolge verläuft:

```console
$ raku t.raku 
Welche Sprache wirst du lernen? Raku
Du wirst Raku lernen
```

{% include nav.html %}