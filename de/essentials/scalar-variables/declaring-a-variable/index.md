---
title: Skalare Variablen
---

{% include menu.html %}

Variablen müssen deklariert werden, bevor Sie sie verwenden. Raku hat spezielle _Deklaratoren_ dafür. Um eine Variable zu deklarieren, verwenden Sie `my` wie unten gezeigt:

```raku
my $name;
```

Damit haben Sie eine neue Variable eingeführt, die bisher keine Nutzlast enthält. Aber sie ist dem Compiler bereits bekannt, um sie zu identifizieren, wenn er denselben Namen später im Programm sieht.

## Mehr als eine Variable

Sie können zwei oder mehr Variablen mit demselben `my` Deklarator deklarieren:

```raku
my ($x, $y);
```

{% include nav.html %}