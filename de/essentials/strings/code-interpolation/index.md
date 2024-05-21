---
title: Code interpolation in Raku strings
---

{% include menu.html %}

Das nächste Level der Interpolation ist die Code-Interpolation. Sie ermöglicht es, einfachen (und auch komplexen!) Code direkt innerhalb eines doppelt-anfangs- und endenden Strings zu haben.

Der interpolierte Code wird zwischen geschweiften Klammern platziert:

```raku
my $a = 10;
my $b = 20;
say "The sum of $a and $b is {$a + $b}.";
```

Das Programm gibt aus:

```console
$ raku t.raku 
The sum of 10 and 20 is 30.
```

## Nochmals Variablen

Eine der Anwendungen dieser Methode besteht darin, Situationen zu entschärfen, in denen eine Variable von einem Text gefolgt werden muss, der fälschlicherweise als Fortsetzung des Variablennamens verstanden werden könnte. Um dies zu verhindern, verwenden Sie geschweifte Klammern, um die Variable einzuschließen:

```raku
my $how-many = 5;
my $what = 'suit';
say "There are $how-many {$what}s."; # There are 5 suits.
```

Ohne geschweifte Klammern würde Raku versuchen, eine nicht existierende Variable `$whats` zu interpolieren.

{% include nav.html %}