---
title: Eingebaute Traits
translations_gpt:
---

{% include menu.html %}

Ein _Trait_ wird mit dem Schlüsselwort `is` direkt nach einer Deklaration angewendet. Es wird zur Kompilierzeit ausgeführt und ändert eine feste Eigenschaft des Elements, an das es angehängt ist. Raku wird mit vielen ausgeliefert; Sie haben bereits einige davon verwendet.

Standardmäßig sind die Parameter einer Subroutine **schreibgeschützt** — Sie können ihnen innerhalb der Routine nichts zuweisen. Das Trait `is copy` gibt Ihnen eine private, veränderbare Kopie des Arguments, die Sie ändern können, ohne den Aufrufer zu beeinflussen:

```raku
sub greet($name is copy) {
    $name = "dear $name";
    say "Hello, $name!";
}

my $who = 'Anna';
greet($who); # Hello, dear Anna!
say $who;    # Anna — the caller's own variable is untouched
```

Das Trait `is rw` geht noch weiter: Es bindet den Parameter an die Variable des Aufrufers, sodass eine Änderung innerhalb der Routine auch außerhalb sichtbar ist:

```raku
sub bump($n is rw) {
    $n++;
}

my $x = 10;
bump($x);
say $x; # 11
```

Ohne eines dieser Traits wäre `$n++` ein Kompilierzeitfehler, da der Parameter schreibgeschützt wäre.

Ein weiteres häufiges Trait setzt einen Standardwert:

```raku
my $port is default(8080);
say $port; # 8080
```

Hier gibt `is default` der Variablen einen Wert, auf den sie zurückfallen kann. Jedes eingebaute Trait — `is rw`, `is copy`, `is default` und weitere — fügt einer Deklaration ein bestimmtes Verhalten zur Kompilierzeit hinzu. Das nächste Thema zeigt, dass Traits keine geschlossene Menge sind: [Sie können Ihre eigenen definieren](/de/advanced/traits-pragmas/writing-a-trait).

{% include nav.html %}
