---
title: Hallo, Welt! in Raku
---

{% include menu.html %}

Großartig, wir haben die wesentlichen Dinge gelernt, die erforderlich sind, um mit Raku zu kommunizieren und die Antwort zu sehen. Gehen wir also direkt zum ersten echten Programm, ‚Hallo, Welt!‘.

```raku
say 'Hallo, Welt!';
```

Bevor wir die Grundlagen der Funktionen lernen, lassen Sie uns einige verschiedene Optionen sehen, die Sie in diesem Programm verwenden können.

Zunächst können Sie Klammern um das Funktionsargument setzen:

```raku
say('Hallo, Welt!');
```

Zweitens können Sie andere Funktionen verwenden, nämlich `put` und `print`. Wiederum mit oder ohne Klammern:

```raku
put 'Hallo, Welt!';

print("Hallo, Welt!\n");
```

Beachten Sie, dass Sie im Fall von `print` das Newline-Zeichen am Ende der Nachricht manuell hinzufügen müssen. Aber keine Sorge, wir werden all diese Details später behandeln.

Bevor wir weitermachen, lassen Sie mich noch eine weitere spannende Option zeigen. Sie können eine Funktion direkt als Methode auf dem String aufrufen:

```raku
'Hallo, Welt!'.say;
```

{% include nav.html %}