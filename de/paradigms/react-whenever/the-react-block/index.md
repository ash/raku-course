---
title: Der react-Block
translations_gpt:
---

{% include menu.html %}

Ein `react`-Block ist ein Ort, an dem Reaktionen wohnen. Darin sagt ein `whenever`: „Wann immer dieses Supply einen Wert aussendet, führe diesen Rumpf aus.“ Der `react`-Block wartet dann, bis jedes von ihm beobachtete Supply fertig ist:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
}

say $sum; # 6
```

Der `whenever`-Rumpf läuft einmal für jeden Wert — `1`, `2`, `3` — und addiert ihn zu `$sum`. Der Themenwert steht als `$_` zur Verfügung (Sie können ihn auch mit `-> $v` benennen).

Das entscheidende Verhalten ist, dass `react` **blockiert**, bis seine Supplies fertig sind. Erst nachdem das `Supply.from-list` alle seine Werte ausgesandt hat, ist der `react`-Block fertig, und das Programm geht zum `say` über. Deshalb ist `$sum` schon `6`, wenn es ausgegeben wird: Der react-Block hat auf den ganzen Strom gewartet.

Das macht `react` zu einem natürlichen Ort, um Ergebnisse aus einem Strom einzusammeln: die Reaktionen einrichten, es bis zum Ende laufen lassen und danach das Gesammelte verwenden.

{% include nav.html %}
