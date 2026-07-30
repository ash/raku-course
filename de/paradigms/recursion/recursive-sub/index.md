---
title: Eine rekursive Subroutine
translations_gpt:
---

{% include menu.html %}

Eine _rekursive_ Subroutine ist eine, die sich selbst aufruft. Das klassische Beispiel ist die Fakultät: Die Fakultät von `n` ist `n` mal die Fakultät von `n - 1`.

```raku
sub fact($n) {
    $n <= 1 ?? 1 !! $n * fact($n - 1);
}

say fact(5); # 120
```

Lesen Sie den Rumpf als zwei Fälle, verbunden durch den ternären Operator `?? !!`:

* Ist `$n` gleich `1` oder kleiner, lautet die Antwort schlicht `1`;
* andernfalls ist die Antwort `$n` mal `fact($n - 1)` — dieselbe Subroutine, mit einer kleineren Zahl aufgerufen.

Jeder Aufruf schält einen Faktor ab und fragt nach einer kleineren Fakultät, bis die Zahl `1` erreicht und sich die Aufrufe wieder abwickeln: `fact(5)` ist `5 * fact(4)`, was `5 * 4 * fact(3)` ist, und so weiter hinunter bis `1`.

Rekursion drückt viele Aufgaben sehr unmittelbar aus. Wann immer sich eine Aufgabe mithilfe einer kleineren Fassung ihrer selbst beschreiben lässt, ist eine rekursive Subroutine oft der natürlichste Weg, sie zu schreiben.

{% include nav.html %}
