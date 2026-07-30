---
title: Introspektion von Containern
---

{% include menu.html %}

_Introspektion_ bedeutet, einen Wert oder einen Container über sich selbst zu befragen — seinen Typ, seinen zugrunde liegenden Container und die Mechanismen dahinter. Du hast bereits ein Introspektionswerkzeug verwendet, `.^name`, um den Typ eines Wertes auszugeben.

Raku bietet eine kleine Familie solcher Werkzeuge, die in Großbuchstaben geschrieben werden: `WHAT`, `VAR`, `WHO` und `HOW`. Sie werden manchmal _Pseudo-Methoden_ genannt, weil der Compiler ihnen eine besondere Bedeutung gibt, anstatt sie als gewöhnliche Methoden zu behandeln. In diesem Abschnitt schauen wir uns jede davon an.

Zur Erinnerung: Hier zeigt `.^name`, wie sich der Typ eines nicht typisierten Containers ändert, wenn du verschiedene Werte darin speicherst:

```raku
my $value;
say $value.^name; # Any

$value = 42;
say $value.^name; # Int

$value = 'forty-two';
say $value.^name; # Str
```

Der Container beginnt als `Any` und gibt dann den Typ des jeweils gespeicherten Wertes zurück.

{% include nav.html %}
