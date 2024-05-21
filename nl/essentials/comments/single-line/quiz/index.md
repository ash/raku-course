---
title: 'Quiz: Enkele-regel opmerkingen'
---

{% include menu.html %}

Selecteer de regels met correcte opmerkingen. Maak je geen zorgen als je de Raku-code nog niet begrijpt.

{:.quiz}
1 | `my $name = 'John'; # Naam instellen`
1 | `my $age = 23; ## Verander het volgend jaar` | Alles na de eerste `#` is een opmerking.
0 | `say $name; Naam afdrukken` | Een opmerking moet beginnen met een `#`.
0 | `my $city = 'TBA'; // Nog niet bekend` | C++-stijl opmerkingen worden niet herkend in Raku.
1 | `# say $age;` | De hele regel is uitgecommentarieerd.
1 | `#say $age;`

{% include quiz.html %}

{% include nav.html %}