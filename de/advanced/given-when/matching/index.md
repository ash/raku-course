---
title: Bereiche, Typen und Bedingungen abgleichen
---

{% include menu.html %}

Ein `when`-Block vergleicht nicht nur auf Gleichheit. Er führt einen _Smart Match_ zwischen dem Thema und dem angegebenen Wert durch, sodass du gegen Bereiche, Typen und Bedingungen matchen kannst, nicht nur gegen einzelne Werte.

## Bereiche

Ein Bereich passt, wenn das Thema innerhalb davon liegt. Das macht `given`/`when` zu einer natürlichen Wahl, um Zahlen in Gruppen einzuteilen:

```raku
my $score = 75;

given $score {
    when 90..100 { say 'A' }
    when 80..89  { say 'B' }
    when 70..79  { say 'C' }
    default      { say 'F' }
}
```

Der Wert `75` liegt im Bereich `70..79`, daher gibt das Programm aus:

```
C
```

## Typen

Ein Typ passt, wenn das Thema von diesem Typ ist. So kannst du anhand der Art des Wertes verzweigen:

```raku
my $value = 'Raku';

given $value {
    when Int { say 'an integer' }
    when Str { say 'a string' }
}
```

Da `$value` einen String enthält, gibt das Programm aus:

```
a string
```

## Bedingungen

Du kannst auch direkt einen Vergleich verwenden. Innerhalb von `when` steht das Thema als `$_` zur Verfügung, sodass eine Bedingung wie `$_ < 0` passt, wenn sie wahr ist:

```raku
my $n = -7;

given $n {
    when $_ < 0 { say 'negative' }
    when 0      { say 'zero' }
    default     { say 'positive' }
}
```

Hier passt das erste `when`, und das Programm gibt aus:

```
negative
```

{% include nav.html %}
