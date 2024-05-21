---
title: 'Quiz: Einzeilige Kommentare'
---

{% include menu.html %}

Wählen Sie die Zeilen mit korrekten Kommentaren aus. Machen Sie sich keine Sorgen, wenn Sie den Raku-Code noch nicht verstehen.

{:.quiz}
1 | `my $name = 'John'; # Name setzen`
1 | `my $age = 23; ## Nächstes Jahr ändern` | Alles nach dem ersten `#` ist ein Kommentar.
0 | `say $name; Name ausgeben` | Ein Kommentar muss mit einem `#` beginnen.
0 | `my $city = 'TBA'; // Noch nicht bekannt` | Kommentare im C++-Stil werden in Raku nicht erkannt.
1 | `# say $age;` | Die ganze Zeile wurde auskommentiert.
1 | `#say $age;`

{% include quiz.html %}

{% include nav.html %}