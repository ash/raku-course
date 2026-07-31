---
title: Pod-bazaĵoj
translations_gpt:
---

{% include menu.html %}

Pod-dokumentado loĝas en via fontdosiero, apartigita per linioj, kiuj komenciĝas per `=`. La plej simpla maniero skribi blokon de ĝi estas inter `=begin pod` kaj `=end pod`:

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod
```

Ene, direktivoj priskribas la strukturon:

* `=head1`, `=head2`, … — titoloj je malsamaj niveloj
* ordinara alineo — nur teksto sur propraj linioj
* `=item` — ero en bula listo

```raku
=begin pod

=head1 Features

=item Fast
=item Small
=item Simple

=end pod
```

La linio `=head1` estas supranivela titolo; la tri linioj `=item` formas liston. Pod sidas apud via kodo sen influi ĝin — la kompililo ignoras ĝin, kiam ĝi rulas la programon, sed povas eltiri kaj bildigi ĝin laŭpete, kiel la lasta temo montras.

{% include nav.html %}
