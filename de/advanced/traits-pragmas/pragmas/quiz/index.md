---
title: Quiz — Pragmas
translations_gpt:
---

{% include menu.html %}

Was passiert mit dem standardmäßig aktivierten `strict`-Pragma von Raku, wenn Sie einer Variablen einen Wert zuweisen, die Sie nie deklariert haben, wie in `$x = 42`?

{:.quiz}
1 | Es ist ein Kompilierzeitfehler
0 | Es erzeugt stillschweigend `$x`
0 | Es gibt eine Warnung aus, läuft aber
0 | Es setzt `$x` auf `Nil`

{% include quiz.html %}

<div class="extended-explanation">

`strict` ist standardmäßig aktiviert und erfordert, dass jede Variable zuerst mit `my` deklariert wird, sodass ein bloßes `$x = 42` nicht kompiliert werden kann — *Variable '$x' is not declared*. Das Deaktivieren des Pragmas mit `no strict` würde die Zuweisung durchlassen.

</div>

{% include nav.html %}
