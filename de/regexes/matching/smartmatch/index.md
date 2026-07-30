---
title: Der Smartmatch-Operator
translations_gpt:
---

{% include menu.html %}

Der Operator, der einen Regex auf eine Zeichenkette anwendet, ist der Smartmatch `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Ein Muster zwischen Schrägstrichen ist die häufigste Form, doch es gibt zwei weitere, die dasselbe bedeuten und manchmal klarer sind:

```raku
say 'the cat sat' ~~ m/cat/;  # ｢cat｣
say 'the cat sat' ~~ rx/cat/; # ｢cat｣
```

Die Form `m/.../` betont, dass Sie _treffen_, und ist praktisch, wenn Sie dem Treffer Optionen mitgeben möchten (diese Optionen, [_Adverbien_](/de/regexes/adverbs) genannt, begegnen Ihnen später). Die Form `rx/.../` erzeugt einen Regex-Wert, ohne ihn schon anzuwenden.

Sehr oft interessiert Sie nur, ob die Zeichenkette getroffen hat, und nicht, was genau gefunden wurde. Da ein erfolgreicher Treffer ein wahrer Wert ist und ein fehlgeschlagener falsch, können Sie das Ergebnis unmittelbar in einem Wahrheitszusammenhang verwenden. Am saubersten erhalten Sie ein schlichtes `True` oder `False` mit der Funktion `so`:

```raku
say so 'the cat sat' ~~ /cat/; # True
say so 'the cat sat' ~~ /dog/; # False
```

Damit wird ein Regex zu einer natürlichen Bedingung für `if`:

```raku
if 'the cat sat' ~~ /cat/ {
    say 'found it';   # found it
}
```

{% include nav.html %}
