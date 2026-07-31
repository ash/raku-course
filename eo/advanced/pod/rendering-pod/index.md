---
title: Bildigi Pod
translations_gpt:
---

{% include menu.html %}

Post kiam dosiero portas Pod, la kompililo povas transformi ĝin en formatitan tekston sen ruli la programon, per la opcio `--doc`:

```
raku --doc mymodule.raku
```

Por la titol-kaj-alinea ekzemplo el pli frue, ĉi tio presas ion kiel:

```
My Module

This module does something useful.
```

Listoj kaj kodblokoj ankaŭ bildiĝas. Prenu ĉi tiun Pod:

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

Bildigita per `raku --doc`, ĝi presas:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Ĉiu `=item` fariĝas bulo, kaj la bloko `=begin code … =end code` estas montrata laŭvorte kaj indentita, ekzakte kiel skribita.

## Bildigi al HTML

La sama mekanismo povas produkti aliajn formatojn. Por HTML vi instalas formatilan modulon unufoje, poste nomas ĝin post `--doc`:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Nun la sama dokumento eliras kiel HTML — la titolo fariĝas `<h1>`, la listo `<ul>` el `<li>`, kaj la kodbloko `<pre>`:

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

(La ilo envolvas tion en kompletan HTML-paĝon.) Tiel la oficiala dokumentado de Raku ĉe [docs.raku.org](https://docs.raku.org) estas produktata el la Pod en la propra fontkodo de Rakudo.

{% include nav.html %}
