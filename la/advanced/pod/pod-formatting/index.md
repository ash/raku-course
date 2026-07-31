---
title: Formatio et codex
translations_gpt:
---

{% include menu.html %}

Intra textum Pod verba _notis formationis_ una littera ornare potes, quae littera scribitur et uncis angularibus circa textum:

* `B<…>` — crassum
* `I<…>` — obliquum
* `C<…>` — codex (monospatio)
* `L<…>` — nexus

```raku
=begin pod

This is B<important>, and C<say> is a built-in.

=end pod
```

Cum redditur, `important` crasse apparet et `say` fonte codicis. Notae nidificantur et componi possunt, itaque `B<C<say>>` est codex crassus.

Ad integrum codicis truncum potius quam breviloquium in linea, trunco codicis delimitato utere — `=begin code … =end code` — qui textum ad verbum servat:

```raku
=begin pod

Here is how to call it:

=begin code
say greet('world');
=end code

=end pod
```

Lineae intra truncum codicis prorsus ut scriptae sunt ostenduntur, sine interpretatione ut Pod. Inter notas in linea et truncos codicis, Pod API documentare potest cum prosa ornata et exemplis quae exsecutionem simulant, omnia iuxta codicem quem describunt servata.

{% include nav.html %}
