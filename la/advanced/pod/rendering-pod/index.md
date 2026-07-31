---
title: Pod reddere
translations_gpt:
---

{% include menu.html %}

Ubi fasciculus Pod continet, compilator eum in textum formatum convertere potest sine programmate exsequendo, optione `--doc` utens:

```
raku --doc mymodule.raku
```

Pro exemplo tituli et paragraphi de supra, hoc aliquid tale imprimit:

```
My Module

This module does something useful.
```

Indices et trunci codicis quoque redduntur. Hunc Pod sume:

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

Cum `raku --doc` redditur, hoc imprimit:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Quodque `=item` punctum fit, et truncus `=begin code … =end code` ad verbum et cum incisuris ostenditur, prorsus ut scriptus est.

## Redditio in HTML

Idem mechanismum alia formata producere potest. Pro HTML, modulum formatoris semel installes, deinde eum post `--doc` nomines:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Nunc idem documentum in HTML exit — titulus fit `<h1>`, index fit `<ul>` cum `<li>`, et truncus codicis fit `<pre>`:

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

(Instrumentum hoc in paginam HTML integram involuit.) Sic documentatio officialis Raku apud [docs.raku.org](https://docs.raku.org) e Pod in ipso fonte Rakudo producitur.

{% include nav.html %}
