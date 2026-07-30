---
title: Toegang tot de Pod
translations_gpt:
---

{% include menu.html %}

Naast het renderen kan een programma zijn eigen Pod ook van **binnenuit** lezen, terwijl het draait. De speciale variabele `$=pod` bevat de Pod van het huidige bestand als een lijst van blokobjecten, zodat een programma zijn eigen documentatie kan inspecteren:

```raku
=begin pod
=head1 Hello
A paragraph.
=end pod

say $=pod.elems;      # 1
say $=pod[0].name;    # pod
```

`$=pod` heeft hier een element — het `pod`-blok — en je kunt erin navigeren om koppen, alinea's en items als gegevens te lezen. Dit is waar tools die documentatie genereren, of testen of deze aanwezig is, op vertrouwen. Of het nu wordt weergegeven met `--doc` of gelezen via `$=pod`, de documentatie is een volwaardig onderdeel van het programma, geen commentaar dat wordt weggegooid.

{% include nav.html %}
