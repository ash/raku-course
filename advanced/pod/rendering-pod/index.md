---
title: Rendering Pod
---

{% include menu.html %}

Once a file carries Pod, the compiler can turn it into formatted text without running the program, using the `--doc` option:

```
raku --doc mymodule.raku
```

For the heading-and-paragraph example from earlier, this prints something like:

```
My Module

This module does something useful.
```

Lists and code blocks render too. Take this Pod:

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

Rendered with `raku --doc`, it prints:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Each `=item` becomes a bullet, and the `=begin code … =end code` block is shown verbatim and indented, exactly as written.

## Rendering to HTML

The same mechanism can produce other formats. For HTML you install a formatter module once, then name it after `--doc`:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Now the very same document comes out as HTML — the heading becomes an `<h1>`, the list a `<ul>` of `<li>`, and the code block a `<pre>`:

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

(The tool wraps this in a complete HTML page.) This is how the official Raku documentation at [docs.raku.org](https://docs.raku.org) is produced from the Pod in Rakudo's own source.

{% include nav.html %}
