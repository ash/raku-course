---
title: Variableninterpolation in Raku-Strings
---

{% include menu.html %}

Haben Sie in den vorherigen Abschnitten bereits bemerkt, dass die Strings manchmal in einfachen, aber manchmal in doppelten Anführungszeichen gesetzt waren? Der Unterschied ist entscheidend.

Natürlich können Sie doppelte Anführungszeichen verwenden, wenn Sie mit minimalem Aufwand ein einfaches Anführungszeichen in den String einfügen möchten:

```raku
say "O'Henry";
```

Übrigens ist es immer noch besser, ein richtiges Apostroph anstelle eines einfachen Anführungszeichens zu verwenden, da [Raku gut mit Unicode umgehen kann](../../on-unicode).

```raku
say 'O’Henry';
```

Aber die wahre Stärke der doppelten Anführungszeichen liegt in ihrer Fähigkeit, Variablen zu _interpolieren_ und—wie wir bald sehen werden—Code auszuführen! Betrachten Sie das folgende Programm:

```raku
my $name = 'Karl';
say "Hallo, $name!";
```

Wie Sie vielleicht erwarten, druckt das Programm `Hallo, Karl!`. Der Name der Variablen `$name` (zusammen mit ihrem Sigil `$`) wurde durch den Wert der Variablen ersetzt.

Die Variable wurde mit dem Wert interpoliert, den die Variable zum Zeitpunkt der Interpolation hatte. Wenn Sie also den Inhalt von `$name` ändern und ihn erneut interpolieren, wird der neue Wert ersetzt. Testen wir es:

```raku
my $name = 'Karl';
say "Hallo, $name!";

$name = 'Anna';
say "Hallo, $name!";
```

Diesmal erzeugt derselbe String unterschiedliche Nachrichten:

    Hallo, Karl!
    Hallo, Anna!

{% include nav.html %}