---
title: Fundamenta Pod
translations_gpt:
---

{% include menu.html %}

Documentatio Pod in fonte tuo habitat, lineis quae ab `=` incipiunt separata. Simplicissimus modus eius partem scribendi est inter `=begin pod` et `=end pod`:

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod
```

Intus, directivae structuram describunt:

* `=head1`, `=head2`, … — tituli diversorum graduum
* paragraphus ordinarius — mera verba in lineis suis
* `=item` — elementum in indice punctato

```raku
=begin pod

=head1 Features

=item Fast
=item Small
=item Simple

=end pod
```

Linea `=head1` est titulus summi gradus; tres lineae `=item` indicem efficiunt. Pod iuxta codicem tuum stat sine eo afficiendo — compilator eum ignorat cum programma exsequitur, sed extrahere et reddere potest cum postulatur, ut ultimum thema ostendit.

{% include nav.html %}
