---
title: Die dynamische Variable überschreiben
---

{% include menu.html %}

## Aufgabe

Zeige, wie eine dynamische Variable durch eine Zwischenroutine hindurchfließt, die nichts von ihr weiß.

Schreibe eine Subroutine `log-it($msg)`, die die Nachricht mit einer dynamischen Variablen `$*prefix` als Präfix ausgibt. Schreibe eine zweite Subroutine `task`, die einfach `log-it('working')` aufruft — und `$*prefix` selbst nie erwähnt. Rufe dann `task` zweimal auf, jedes Mal aus einem Block heraus, der `$*prefix` auf einen anderen Wert setzt (`INFO`, dann `DEBUG`).

## Beispiel

Das Programm gibt aus:

```
INFO: working
DEBUG: working
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
