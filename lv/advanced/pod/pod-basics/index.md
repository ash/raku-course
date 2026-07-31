---
title: Pod pamati
translations_gpt:
---

{% include menu.html %}

Pod dokumentācija dzīvo jūsu pirmkoda failā, atdalīta ar rindām, kas sākas ar `=`. Vienkāršākais veids, kā uzrakstīt tās bloku, ir starp `=begin pod` un `=end pod`:

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod
```

Iekšpusē direktīvas apraksta struktūru:

* `=head1`, `=head2`, … — dažādu līmeņu virsraksti
* parasta rindkopa — vienkārši teksts savās rindās
* `=item` — punkts aizzīmētā sarakstā

```raku
=begin pod

=head1 Features

=item Fast
=item Small
=item Simple

=end pod
```

Rinda `=head1` ir augstākā līmeņa virsraksts; trīs `=item` rindas veido sarakstu. Pod atrodas līdzās jūsu kodam, to neietekmējot — kompilators to ignorē, kad programma izpildās, taču pēc pieprasījuma var izvilkt un atveidot, kā rāda pēdējais temats.

{% include nav.html %}
