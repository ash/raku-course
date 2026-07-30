---
title: Transliteration
translations_gpt:
---

{% include menu.html %}

Wenn Sie einzelne **Zeichen** statt eines ganzen Musters ersetzen möchten, nehmen Sie den Transliterationsoperator `tr///`. Er ordnet jedem Zeichen der ersten Menge das Zeichen an derselben Stelle der zweiten Menge zu:

```raku
my $s = 'hello';
$s ~~ tr/a..z/A..Z/;
say $s; # HELLO
```

Jeder Kleinbuchstabe wird durch den Großbuchstaben an der entsprechenden Stelle des zweiten Bereichs ersetzt, das ganze Wort wird also großgeschrieben.

Die beiden Mengen werden Zeichen für Zeichen einander zugeordnet. Ein kleines Beispiel, das drei Buchstaben verschiebt:

```raku
my $s = 'abcabc';
$s ~~ tr/abc/xyz/;
say $s; # xyzxyz
```

Hier wird jedes `a` zu `x`, jedes `b` zu `y` und jedes `c` zu `z`.

Die Transliteration ist das richtige Werkzeug für Zuordnungen auf Zeichenebene — Groß- und Kleinschreibung ändern, ein kleines Alphabet austauschen oder kodieren. Für alles, was von einem Muster statt von einzelnen Zeichen abhängt, nehmen Sie `s///`.

{% include nav.html %}
