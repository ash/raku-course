---
title: Einzeilige Kommentare
---

{% include menu.html %}

Die einfachste Form eines Kommentars ist ein einzeiliger Kommentar. Er beginnt mit dem Zeichen `#` und geht bis zum Ende der aktuellen Zeile.

```raku
my $name; # Diese Variable wird verwendet, um den Namen des Benutzers zu speichern
$name = prompt 'Wie heißt du? ';
say $name; # Jetzt sehen wir den Namen
```

Beachten Sie, dass ein Shebang wie `#!/usr/bin/env raku` in der ersten Zeile des Codes auch ein Kommentar für Raku ist, während er von der Shell gelesen und ausgeführt werden kann.

{% include nav.html %}