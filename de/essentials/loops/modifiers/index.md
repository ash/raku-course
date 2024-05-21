---
title: while und until als Anweisungsmodifikatoren
---

{% include menu.html %}

Sowohl `while` als auch `until` können in Form von Anweisungsmodifikatoren verwendet werden ([ähnlich](/de/essentials/conditional-checks/modifiers) wie `if` und `unless`).

Betrachten Sie ein Beispiel, das eine Modulo-Division nachahmt:

```raku
my $x = 10;
$x -= 3 while $x > 2;
say $x; # 1
```

Hier ist `-=` der Operator, der sowohl Subtraktion als auch Zuweisung kombiniert. In diesem Fall ist `$x -= 3` äquivalent zu `$x = $x - 3`.

Der `while`-Modifikator lässt die Anweisung `$x -= 3` wiederholen, solange die Bedingung `$x > 2` `True` bleibt. Sobald sie `False` wird, stoppt die Schleife.

Beachten Sie, dass die Anweisung nicht ausgeführt wird, wenn die Bedingung anfangs `False` ist.

Dasselbe Programm kann mit `until` umgeschrieben werden. Dafür muss die Bedingung invertiert werden:

```raku
my $x = 10;
$x -= 3 until $x <= 2;
say $x; # 1
```

{% include nav.html %}