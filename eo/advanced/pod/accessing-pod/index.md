---
title: Aliri la Pod
translations_gpt:
---

{% include menu.html %}

Krom bildigi ĝin, programo povas legi sian propran Pod de **interne**, dum ĝi ruliĝas. La speciala variablo `$=pod` tenas la Pod de la nuna dosiero kiel liston de blokobjektoj, do programo povas inspekti sian propran dokumentadon:

```raku
=begin pod
=head1 Hello
A paragraph.
=end pod

say $=pod.elems;      # 1
say $=pod[0].name;    # pod
```

`$=pod` ĉi tie havas unu elementon — la blokon `pod` — kaj vi povas eniri ĝin por legi titolojn, alineojn kaj erojn kiel datumojn. Jen tio, sur kio dependas iloj, kiuj generas dokumentadon aŭ testas, ke ĝi ĉeestas. Ĉu bildigita per `--doc` ĉu legita per `$=pod`, la dokumentado estas unuaklasa parto de la programo, ne komento por esti forstrekita.

{% include nav.html %}
