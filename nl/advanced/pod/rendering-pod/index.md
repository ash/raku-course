---
title: Pod renderen
translations_gpt:
---

{% include menu.html %}

Zodra een bestand Pod bevat, kan de compiler het omzetten naar opgemaakte tekst zonder het programma uit te voeren, met behulp van de optie `--doc`:

```
raku --doc mymodule.raku
```

Voor het eerdere voorbeeld met kop en alinea print dit iets als:

```
My Module

This module does something useful.
```

Lijsten en codeblokken worden ook weergegeven. Neem deze Pod:

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

Weergegeven met `raku --doc` print het:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Elk `=item` wordt een opsommingsteken, en het blok `=begin code ... =end code` wordt letterlijk en ingesprongen weergegeven, precies zoals geschreven.

## Renderen naar HTML

Hetzelfde mechanisme kan andere formaten produceren. Voor HTML installeer je eenmalig een formatter-module en geef je deze op na `--doc`:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Nu komt hetzelfde document als HTML tevoorschijn — de kop wordt een `<h1>`, de lijst een `<ul>` van `<li>`'s, en het codeblok een `<pre>`:

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

(De tool verpakt dit in een complete HTML-pagina.) Dit is hoe de officiele Raku-documentatie op [docs.raku.org](https://docs.raku.org) wordt geproduceerd vanuit de Pod in Rakudo's eigen broncode.

{% include nav.html %}
