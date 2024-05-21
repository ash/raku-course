---
title: 'Quiz: Boolesche Operationen'
---

{% include menu.html %}

Wählen Sie in jedem der folgenden Abschnitte die richtige Antwort aus, die das Programm ausgibt.

## 1

Hier ist das Programm:

```raku
my $value = True && False;
say $value;
```

Was gibt es aus?

{:.quiz}
0 | True
1 | False

## 2 

Was gibt das zweite Programm aus?

```raku
my $value = True && False || True;
say $value;
```

{:.quiz}
1 | True
0 | False

## 3

Was ist die Ausgabe dieses Programms?

```raku
my $value = True || False && True;
say $value;
```

{:.quiz}
1 | True
0 | False

{% include quiz.html %}

## Kommentare

In den zweiten und dritten Programmen haben wir Ausdrücke mit drei Booleschen Werten. Das Ergebnis hängt von der Reihenfolge ab, in der die Operationen ausgeführt werden. Der `&&`-Operator hat eine höhere Priorität als `||`, daher wird er zuerst ausgeführt.

{% include nav.html %}