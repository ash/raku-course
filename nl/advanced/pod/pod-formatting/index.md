---
title: Opmaak en code
translations_gpt:
---

{% include menu.html %}

Binnen Pod-tekst markeer je woorden met _opmaakcodes_ van een enkele letter, geschreven als een letter gevolgd door punthaken rond de tekst:

* `B<...>` — vet
* `I<...>` — cursief
* `C<...>` — code (monospace)
* `L<...>` — een link

```raku
=begin pod

This is B<important>, and C<say> is a built-in.

=end pod
```

Bij het renderen verschijnt `important` vetgedrukt en `say` in een codelettertype. De codes kunnen genest en gecombineerd worden, dus `B<C<say>>` is vetgedrukte code.

Voor een heel blok code in plaats van een inline fragment, gebruik je een begrensd codeblok — `=begin code ... =end code` — dat de tekst letterlijk bewaart:

```raku
=begin pod

Here is how to call it:

=begin code
say greet('world');
=end code

=end pod
```

De regels binnen het codeblok worden exact weergegeven zoals ze zijn geschreven, zonder als Pod te worden geinterpreteerd. Met de inline codes en codeblokken kan Pod een API documenteren met opgemaakte tekst en uitvoerbaar ogende voorbeelden, allemaal naast de code die het beschrijft.

{% include nav.html %}
