---
title: Pod rendern
---

{% include menu.html %}

Sobald eine Datei Pod enthält, kann der Compiler sie in formatierten Text umwandeln, ohne das Programm auszuführen, indem die Option `--doc` verwendet wird:

```
raku --doc mymodule.raku
```

Für das Beispiel mit Ueberschrift und Absatz von vorhin gibt dies etwa Folgendes aus:

```
My Module

This module does something useful.
```

Listen und Codeblöcke werden ebenfalls gerendert. Nimm dieses Pod:

```raku
=begin pod

=head1 Shopping list

Things to buy:

=item Apples
=item Bread
=item Cheese

Run it like this:

=begin code
say 'hello';
=end code

=end pod
```

Gerendert mit `raku --doc` gibt es Folgendes aus:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Jedes `=item` wird zu einem Aufzählungszeichen, und der `=begin code ... =end code`-Block wird wörtlich und eingerückt angezeigt, genau wie geschrieben.

## Rendern als HTML

Der gleiche Mechanismus kann andere Formate erzeugen. Für HTML installierst du einmalig ein Formatierungsmodul und gibst es dann nach `--doc` an:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Nun wird dasselbe Dokument als HTML ausgegeben — die Ueberschrift wird zu einem `<h1>`, die Liste zu einer `<ul>` mit `<li>`, und der Codeblock zu einem `<pre>`:

```html
<h1>Shopping list</h1>
<p>Things to buy:</p>
<ul>
  <li>Apples</li>
  <li>Bread</li>
  <li>Cheese</li>
</ul>
<p>Run it like this:</p>
<pre class="pod-block-code">say 'hello';</pre>
```

(Das Werkzeug verpackt dies in eine vollständige HTML-Seite.) So wird die offizielle Raku-Dokumentation auf [docs.raku.org](https://docs.raku.org) aus dem Pod in Rakudos eigenem Quellcode erzeugt.

{% include nav.html %}
