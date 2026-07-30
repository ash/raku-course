---
title: Typen von Raku-Operatoren
translations_gpt:
---

{% include menu.html %}

Sie haben bereits viele Operatoren verwendet — `+`, `~`, `++` und so weiter. In Raku werden Operatoren danach klassifiziert, _wo_ sie relativ zu ihren Operanden stehen. Die Kenntnis dieser Kategorien hilft Ihnen später, wenn Sie eigene Operatoren definieren.

## `prefix`

Ein Präfix-Operator steht _vor_ einem einzelnen Operanden:

```raku
my $x = 5;
say -$x; # -5
say ?$x; # True
```

Hier negiert `-` die Zahl und `?` wandelt einen Wert in seinen Booleschen Wert um.

## `infix`

Ein Infix-Operator steht _zwischen_ zwei Operanden. Die meisten bekannten Arithmetik- und String-Operatoren sind Infix-Operatoren:

```raku
say 3 + 4;       # 7
say 'a' ~ 'b';   # ab
```

Ein Infix-Operator ist nicht immer ein Satzzeichen — er kann auch ein Wort sein. Der Operator `gcd`, den Sie bei den [ganzen Zahlen](/de/advanced/integers) kennengelernt haben, ist zum Beispiel ein Infix-Operator, der als Name zwischen seinen beiden Operanden steht:

```raku
say 12 gcd 18;   # 6
```

## `postfix`

Ein Postfix-Operator steht _nach_ einem einzelnen Operanden:

```raku
my $x = 5;
$x++;
say $x; # 6
```

## `circumfix` und `postcircumfix`

Ein Circumfix-Operator _umschließt_ seinen Operanden. Die eckigen Klammern, die ein Array erzeugen, sind ein Circumfix-Operator:

```raku
my @a = [1, 2, 3];
```

Ein Postcircumfix-Operator umschließt etwas, folgt aber auf einen Term. Die Indizierung ist ein Postcircumfix-Operator — das `[1]` nach `@a`:

```raku
my @a = 10, 20, 30;
say @a[1]; # 20
```

Diese Bezeichnungen — `prefix`, `infix`, `postfix`, `circumfix` und `postcircumfix` — sind dieselben Wörter, die Raku verwendet, wenn Sie [einen neuen Operator deklarieren](/de/advanced/user-defined-operators), wie Sie später sehen werden.

{% include nav.html %}
