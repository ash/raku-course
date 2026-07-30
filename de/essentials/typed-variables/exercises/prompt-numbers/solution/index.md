---
title: 'Solution: Das Ergebnis von `prompt` untersuchen — Zahlen'
---

{% include menu.html %}

## Code

Hier ist das vollständige Programm, das das Problem löst und sowohl den eingegebenen Wert als auch dessen Typ ausgibt.

```raku
my $n = prompt 'Enter a number: ';
say $n;
say $n.WHAT;
```

🦋 Du findest den Quellcode in der Datei [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/prompt-numbers.raku).

## Testläufe

Führe das Programm mehrmals aus und gib Zahlen verschiedenen Typs ein.

### Ganze Zahlen

Versuchen wir zuerst ganze Zahlen, sowohl positive als auch negative.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 10
10
(IntStr)
```

Der Typ des Ergebnisses ist `IntStr`. Dies ist ein eingebauter Typ, der sowohl die Eigenschaften von `Int` als auch von `Str` hat.

### Rationale Zahlen

Versuchen wir nun eine rationale Zahl. Denke daran, dass in Raku die Notation mit einem Dezimalpunkt eine `Rat`-Zahl und keine Gleitkommazahl erzeugt.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 3.14
3.14
(RatStr)
```

Diesmal sagt das Programm, dass der Datentyp in `$n` `RatStr` ist, was für einen kombinierten Typ aus `Rat` und `Str` steht.

### Gleitkommazahlen

Versuche schließlich eine Zahl in wissenschaftlicher Notation. Du solltest in der Lage sein, die Ausgabe an dieser Stelle zu erraten.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 5e-14
5e-14
(NumStr)
```

Tatsächlich ist der neue Wert vom Typ `NumStr`.

{% include nav.html %}