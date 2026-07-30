---
title: '`WHAT` verwenden'
---

{% include menu.html %}

`WHAT` ist eine Pseudo-Methode, die Zugriff auf den Typ eines Wertes gibt. Du kannst sie auf ähnliche Weise wie `.^name` verwenden:

```raku
my $var = 42;

say $var.^name;
say $var.WHAT;
```

Beide geben den Typ aus, mit einem kleinen Unterschied in der Darstellung: `.^name` liefert den reinen Namen, während `WHAT` das Typ-Objekt anzeigt, das in Klammern geschrieben wird:

```
Int
(Int)
```

Bei einer Variable ohne Typ-Constraint beginnt der Typ als `Any`. Sobald du einen Wert zuweist, folgen sowohl `^name` als auch `WHAT` dem Typ des gespeicherten Wertes:

```raku
my $var;
say $var.^name; # Any
say $var.WHAT;  # (Any)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

Mit einem Typ-Constraint ist der Typ sofort bekannt, noch bevor etwas zugewiesen wird:

```raku
my Str $var;
say $var.^name; # Str
say $var.WHAT;  # (Str)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

## Typ-Objekte vergleichen

Da `WHAT` das Typ-Objekt selbst zurückgibt, kannst du zwei davon mit dem _Wertidentitäts_-Operator `===` vergleichen, der prüft, ob beide Seiten exakt derselbe Wert sind. Es gibt immer nur ein Typ-Objekt pro Typ, daher ist dies eine saubere Methode, um zu testen, ob zwei Werte denselben Typ haben:

```raku
my $a = 42;
my $b = 100;

say $a.WHAT === $b.WHAT; # True  — both are Int
say $a.WHAT === Int;     # True
say $a.WHAT === Str;     # False
```

Im Gegensatz zu `==`, das Zahlen vergleicht, vergleicht `===` die Identität, sodass es direkt mit Typ-Objekten (und anderen Werten) funktioniert.

{% include nav.html %}
