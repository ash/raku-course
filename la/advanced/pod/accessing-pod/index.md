---
title: Pod accedere
translations_gpt:
---

{% include menu.html %}

Praeter redditionem, programma suum Pod **ab intus** legere potest, dum currit. Variabilis specialis `$=pod` Pod fasciculi currentis ut indicem obiectorum truncorum continet, itaque programma suam documentationem inspicere potest:

```raku
=begin pod
=head1 Hello
A paragraph.
=end pod

say $=pod.elems;      # 1
say $=pod[0].name;    # pod
```

`$=pod` hic unum elementum habet — truncum `pod` — et in eum descendere potes ut titulos, paragraphos, et elementa ut data legas. Hoc est quo instrumenta nituntur quae documentationem generant, vel probant eam adesse. Sive cum `--doc` redditus sive per `$=pod` lectus, documentatio pars prima classis programmatis est, non commentarium abiciendum.

{% include nav.html %}
