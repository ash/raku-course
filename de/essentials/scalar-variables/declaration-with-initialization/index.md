---
title: Deklaration mit Initialisierung
---

{% include menu.html %}

Wenn Sie den Wert kennen, den Sie einer Variablen zuweisen möchten, wenn die Variable erstellt wird, können Sie eine Codezeile sparen und es in einer einzigen Anweisung schreiben:

```raku
my $name = 'Anna';
say $name;
```

## Mehrere Variablen

Um mehr als eine Variable zu erstellen und zuzuweisen, verwenden Sie das folgende Muster:

```raku
my ($name, $age) = 'Carl', 36;
```

{% include nav.html %}