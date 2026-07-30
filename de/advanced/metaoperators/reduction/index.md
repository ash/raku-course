---
title: Reduktions-Metaoperatoren
translations_gpt:
---

{% include menu.html %}

Ein Reduktions-Meta-Operator wird als regulärer Operator in eckigen Klammern geschrieben, wie z. B. `[+]` oder `[*]`. Er nimmt eine Liste von Werten und fügt den Operator zwischen jedes Paar ein, wodurch die gesamte Liste auf einen einzelnen Wert reduziert wird.

Zum Beispiel addiert `[+]` alle Elemente einer Liste:

```raku
my @data = 3, 5, 7, 9, 11;
say [+] @data; # 35
```

Das Konstrukt `[+] @data` entspricht dem manuellen Ausschreiben des Operators:

```raku
say 3 + 5 + 7 + 9 + 11; # 35
```

Jeder geeignete Infix-Operator funktioniert auf die gleiche Weise. Mit `[*]` erhalten Sie das Produkt der Liste, sodass die Anwendung auf den Bereich `1..$n` eine praktische Methode ist, eine Fakultät zu berechnen:

```raku
my $n = 5;
say [*] 1..$n; # 120
```

Hier erzeugt der Bereich `1..$n` die Zahlen von 1 bis 5, und `[*]` multipliziert sie: `1 * 2 * 3 * 4 * 5`, das ist _5!_.

Zeichenkettenverkettung funktioniert ebenfalls. Die `[~]`-Reduktion verbindet eine Liste von Zeichenketten zu einer einzigen:

```raku
my @strings = <neun hundert fünf und zwanzig>;
say [~] @strings; # neunhundertfünfundzwanzig
```

Sogar Vergleichsoperatoren können reduziert werden. `[<]` prüft, ob die Werte in streng aufsteigender Reihenfolge stehen:

```raku
say [<] 1, 2, 3; # True
```

## Dreieckige Reduktion

Wenn Sie einen Backslash in die Klammern setzen, erhalten Sie eine _dreieckige_ Reduktion, die alle Zwischenergebnisse behält, anstatt nur das endgültige:

```raku
say [\+] 1..5; # (1 3 6 10 15)
```

Jedes Element des Ergebnisses ist eine Teilsumme: `1`, dann `1+2`, dann `1+2+3`, und so weiter bis zur Summe der gesamten Liste.

{% include nav.html %}
