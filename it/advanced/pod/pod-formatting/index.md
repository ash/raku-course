---
title: Formattazione e codice
translations_gpt:
---

{% include menu.html %}

All'interno del testo Pod si marcano le parole con _codici di formattazione_ a lettera singola, scritti come una lettera seguita da parentesi angolari attorno al testo:

* `B<…>` — grassetto
* `I<…>` — corsivo
* `C<…>` — codice (a spaziatura fissa)
* `L<…>` — un collegamento

```raku
=begin pod

This is B<important>, and C<say> is a built-in.

=end pod
```

Quando viene renderizzato, `important` appare in grassetto e `say` in un carattere a spaziatura fissa. I codici si annidano e possono essere combinati, quindi `B<C<say>>` è codice in grassetto.

Per un intero blocco di codice anziché un frammento in linea, si usa un blocco di codice delimitato — `=begin code … =end code` — che preserva il testo così com'è:

```raku
=begin pod

Here is how to call it:

=begin code
say greet('world');
=end code

=end pod
```

Le righe all'interno del blocco di codice vengono mostrate esattamente come scritte, senza essere interpretate come Pod. Tra i codici in linea e i blocchi di codice, Pod può documentare un'API con prosa formattata e esempi dall'aspetto eseguibile, il tutto mantenuto vicino al codice che descrive.

{% include nav.html %}
