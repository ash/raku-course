---
title: Formatierung und Code
---

{% include menu.html %}

Innerhalb von Pod-Text markierst du Wörter mit einbuchstabigen _Formatierungscodes_, die als Buchstabe gefolgt von spitzen Klammern um den Text geschrieben werden:

* `B<...>` — fett
* `I<...>` — kursiv
* `C<...>` — Code (Festbreitenschrift)
* `L<...>` — ein Link

```raku
=begin pod

This is B<important>, and C<say> is a built-in.

=end pod
```

Beim Rendern erscheint `important` fett und `say` in einer Code-Schriftart. Die Codes können verschachtelt und kombiniert werden, sodass `B<C<say>>` fetter Code ist.

Für einen ganzen Codeblock statt eines Inline-Ausschnitts verwendest du einen begrenzten Codeblock — `=begin code ... =end code` — der den Text wörtlich bewaehrt:

```raku
=begin pod

Here is how to call it:

=begin code
say greet('world');
=end code

=end pod
```

Die Zeilen innerhalb des Codeblocks werden genau so angezeigt, wie sie geschrieben sind, ohne als Pod interpretiert zu werden. Mit den Inline-Codes und Codebloecken kann Pod eine API mit formatierter Prosa und ausführbar aussehenden Beispielen dokumentieren, alles direkt neben dem Code, den es beschreibt.

{% include nav.html %}
