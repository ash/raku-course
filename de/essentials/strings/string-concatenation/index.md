---
title: String-Verkettung in Raku
---

{% include menu.html %}

Wenn Sie zwei Zeichenketten haben, können Sie sie zusammenfügen und eine neue, längere Zeichenkette erhalten. Diese Aktion wird als Zeichenkettenverkettung bezeichnet. In Raku verketten Sie Zeichenketten mit—raten Sie mal?—dem Verkettungsoperator. Dieser Operator ist eine Tilde: `~`. Um zwei Zeichenketten zu verketten, setzen Sie `~` zwischen sie:

```raku
say 'Hello, ' ~ 'World!';
```

Wenn unsere Zeichenketten in Variablen gespeichert sind, können wir 'Variablen verketten', nun ja, eigentlich die Zeichenketten verketten, die diese Variablen enthalten:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';

say $greeting ~ $who;
```

Oder Sie können eine neue Variable mit dem verketteten Wert erstellen:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';
my $message = $greeting ~ $who;

say $message;
```

## Verkettung mit Zuweisung

Wenn Sie die Variable aktualisieren und die neue Zeichenkette anhängen müssen, verwenden Sie die folgende Form:

```raku
# Anstatt von 
$str = $str ~ $another-str;

# verwenden Sie:
$str ~= $another-str;
```

{% include nav.html %}