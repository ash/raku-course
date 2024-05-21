---
title: Lösung von „Wahre und falsche Ganzzahlen“
---

{% include menu.html %}

Um eine Zahl in einen Booleschen Wert umzuwandeln, können Sie entweder den `?`-Präfixoperator oder eine Konstruktorform verwenden, oder die `Bool`-Methode aufrufen, oder die `so`-Routine entweder als Präfixoperator oder als Methode verwenden:

```raku
my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;
```

Es ist ziemlich offensichtlich, dass Nicht-Null-Werte in `True` umgewandelt werden. Wir sind daher am meisten daran interessiert, uns die Optionen anzusehen, die zu `False` werden.

Alle Nullen, ganzzahlig, Gleitkomma oder rational, werden zu `False` umgewandelt:

```raku
my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False
```

Natürlich ändert sich nichts, wenn Sie versuchen, die Zahl zuerst zu negieren:

```raku
my $int = 0;
say ?(-$int); # False
```

🦋 Sie können das vollständige Programm mit dem obigen Beispiel in der Datei [true-false-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/coercion/true-false-numbers.raku) finden.

{% include nav.html %}