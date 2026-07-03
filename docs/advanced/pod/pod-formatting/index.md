---
title: Formatting and code
---

{% include menu.html %}

Within Pod text you mark up words with single-letter _formatting codes_, written as a letter followed by angle brackets around the text:

* `B<…>` — bold
* `I<…>` — italic
* `C<…>` — code (monospace)
* `L<…>` — a link

```raku
=begin pod

This is B<important>, and C<say> is a built-in.

=end pod
```

When rendered, `important` appears in bold and `say` in a code font. The codes nest and can be combined, so `B<C<say>>` is bold code.

For a whole block of code rather than an inline snippet, use a delimited code block — `=begin code … =end code` — which preserves the text verbatim:

```raku
=begin pod

Here is how to call it:

=begin code
say greet('world');
=end code

=end pod
```

The lines inside the code block are shown exactly as written, without being interpreted as Pod. Between the inline codes and code blocks, Pod can document an API with formatted prose and runnable-looking examples, all kept next to the code it describes.

{% include nav.html %}
