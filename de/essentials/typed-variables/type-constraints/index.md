---
title: Typbeschränkungen
---

{% include menu.html %}

Raku ist eine Sprache mit dem sogenannten graduellen Typsystem. In den meisten Fällen müssen Sie sich keine Gedanken darüber machen, den Typ der Variablen anzugeben. In einigen Fällen möchten Sie jedoch den Typ für die gegebene Variable einschränken, und das können Sie tun, indem Sie den Typ wie unten gezeigt angeben:

```raku
my Int $var = 42;
```

Nun ist es möglich, `$var` einen anderen ganzzahligen Wert zuzuweisen, aber der Versuch, eine Zeichenkette oder sogar eine Gleitkommazahl zuzuweisen, endet mit einer Ausnahme:

```raku
my Int $var = 42;
$var = '314E-2';
```

Dieses Programm gibt den folgenden Fehler aus:

    Type check failed in assignment to $var; expected Int but got Str ("314E-2")
      in block <unit> at t.raku line 2

{% include nav.html %}