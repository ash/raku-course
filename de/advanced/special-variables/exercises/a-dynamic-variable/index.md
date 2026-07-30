---
title: Eine dynamische Variable
---

{% include menu.html %}

## Aufgabe

Eine dynamische Variable — geschrieben mit dem `*`-Twigil — wird aufgelöst, indem nach außen durch den Aufrufstapel gesucht wird, nicht über den lexikalischen Geltungsbereich. Der Wert, den eine Subroutine sieht, hängt also davon ab, wer sie aufgerufen hat, was es einem Block ermöglicht, den von ihm aufgerufenen Code unter einer anderen Identität auszuführen.

1. Deklariere eine dynamische Variable `$*user` mit dem Wert `'guest'`.
2. Schreibe eine Subroutine `whoami`, die `running as ` gefolgt vom aktuellen `$*user` ausgibt (zum Beispiel `running as guest`). Sie muss `$*user` direkt lesen — sie nimmt keine Parameter entgegen.
3. Rufe `whoami` einmal auf der obersten Ebene auf: sie meldet `guest`.
4. Dann rufe innerhalb eines Blocks, der `$*user` als `'admin'` neu deklariert, dieselbe `whoami` erneut auf: sie meldet jetzt `admin`.

## Beispiel

Das Programm gibt aus:

```
running as guest
running as admin
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
