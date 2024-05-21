---
title: Wissenschaftliche Notation in Raku
---

{% include menu.html %}

Im vorherigen Abschnitt haben wir gesehen, dass Zahlen wie `1.5` rationale Zahlen sind. Um eine Zahl zu erstellen, die einer `double`-Zahl in C++ entspricht, verwenden Sie die wissenschaftliche Notation:

```raku
1E0
314e-2
-5e-20
5.424E40
7.6e+15
```

In diesem Fall erstellt Raku Instanzen des `Num`-Datentyps und speichert die Daten intern als IEEE-Zahl.

## Eingebaute Konstanten

Es gibt einige Konstanten, die Sie direkt verwenden können. Es handelt sich dabei um Zahlen des Typs `Num`. Sowohl ASCII- als auch Unicode-Varianten sind verfügbar:

`pi` | `π` | 3.141592653589793
`tau` | `τ` | entspricht `2 * π`
`e` | `𝑒` | 2.718281828459045

{% include nav.html %}