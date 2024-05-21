---
title: Lösung für ‚Summe der Zahlen von 1 bis 100‘
---

{% include menu.html %}

Um die Summe der ganzen Zahlen von 1 bis 100 zu berechnen, ist es natürlich möglich, all diese Zahlen in einem einzigen langen Ausdruck zu addieren. Oder eine Schleife zu erstellen (wir werden Schleifen in den weiteren Abschnitten behandeln). Aber die beste Lösung ist, eine bekannte [Formel](https://de.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_⋯) zu verwenden:

<div class="formula"><img src="sum.png" style="height: 3.5em; width: auto" /></div>

Mit der Formel wird die Lösung ziemlich trivial.

## Code

```raku
my $N = 100;
my $sum = $N * (1 + $N) / 2;
say "Die Summe der Zahlen von 1 bis $N ist $sum.";
```

🦋 Den vollständigen Code finden Sie in der Datei [sum1-100.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum1-100.raku).

## Ausgabe

```console
$ raku exercises/numbers/sum1-100.raku 
Die Summe der Zahlen von 1 bis 100 ist 5050.
```

{% include nav.html %}