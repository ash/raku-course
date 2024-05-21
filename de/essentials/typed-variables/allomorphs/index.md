---
title: Allomorphs
---

{% include menu.html %}

Betrachten Sie das folgende Programm. Können Sie vor dem Ausführen sagen, welche Eingabewerte es brechen würden und in welcher Zeile?

```raku
my $input = prompt 'Enter something: ';
my Int $i = $input;
my Str $s = $input;

say $i;
say $s;
```

Hier werden drei Skalare Variablen erstellt. Zwei davon, `$i` und `$s`, sind typisierte Variablen. Das bedeutet, dass `$i` nur ganze Zahlen speichern kann und `$s` nur Zeichenketten.

Der Rückgabetyp von `prompt` hängt von den eingegebenen Zeichen ab. Wenn die Eingabezeichenkette eine ganze Zahl darstellen kann, ist das Ergebnis vom Typ `IntStr`, der _sowohl_ `Int` als auch `Str` ist und daher sowohl einer `Int`- als auch einer `Str`-Variable zugewiesen werden kann. Wenn Sie also beispielsweise `1234` eingeben, bricht das Programm nicht ab.

```
$ raku allomorphs.raku
Enter something: 1234
1234
1234
```

Der `IntStr`-Typ ist ein Beispiel für den sogenannten _Allomorph_ — ein Datentyp, der zwei andere Typen kombiniert. Hier sind einige weitere Beispiele.

Wenn Sie eine Zeichenkette eingeben, die keine ganze Zahl sein kann, bricht das Programm in dem Moment ab, in dem wir `$input` `$i` zuweisen:

```
$ raku allomorphs.raku
Enter something: Hello, World!
Type check failed in assignment to $i; expected Int but got Str ("Hello, World!")
  in block <unit> at allomorphs.raku line 2
```

Beachten Sie, dass Sie einen Fehler erhalten, selbst wenn die Eingabezeichenkette in eine Zahl umgewandelt werden kann, aber keine ganze Zahl ist. Da es nicht möglich ist, eine Gleitkommazahl oder eine rationale Zahl in einem Ganzzahl-Container zu speichern, wird Raku eine Ausnahme auslösen:

```
$ raku allomorphs.raku
Enter something: 3.14
Type check failed in assignment to $i; expected Int but got RatStr (RatStr.new(3.14, "3....)
  in block <unit> at allomorphs.raku line 2
```

Die zweite Zuweisung, `$s = $input`, wird niemals brechen, da eine Zeichenkette jede Eingabe annehmen kann.

🦋 Sie können den Quellcode dieses Programms in der Datei [allomorphs.raku](https://github.com/ash/raku-course/blob/master/essentials/typed-variables/allomorphs/allomorphs.raku) finden.

{% include nav.html %}