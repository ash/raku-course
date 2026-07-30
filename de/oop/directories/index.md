---
title: Mit Verzeichnissen arbeiten
translations_gpt:
---

{% include menu.html %}

Um mit dem Dateisystem selbst zu arbeiten — zu prüfen, was es gibt, und Verzeichnisse anzulegen —, verwendet Raku _Pfadobjekte_. Jede Zeichenkette lässt sich mit der Methode `.IO` in eines verwandeln, und das Pfadobjekt beantwortet dann Fragen zu diesem Pfad.

Die häufigsten Fragen sind, ob ein Pfad existiert und um was für ein Ding es sich handelt:

```raku
spurt 'greeting.txt', 'hi';

say 'greeting.txt'.IO.e; # True  — does it exist?
say 'greeting.txt'.IO.f; # True  — is it a file?
say 'greeting.txt'.IO.d; # False — is it a directory?
```

`.e` prüft die Existenz, `.f` prüft auf eine gewöhnliche Datei und `.d` auf ein Verzeichnis.

Um ein neues Verzeichnis anzulegen, verwenden Sie `mkdir`:

```raku
mkdir 'reports';
say 'reports'.IO.d; # True
```

Das nächste Thema zeigt, wie man auflistet, was ein Verzeichnis enthält.

{% include nav.html %}
