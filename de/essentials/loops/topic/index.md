---
title: Themenvariable
---

{% include menu.html %}

`$_` ist eine spezielle Variable, die _Themenvariable_ genannt wird.

Betrachten Sie die Schleife über einen Bereich:

```raku
for 1..5 -> $n {
    say $n;
}
```

Die Variable `$n` kann weggelassen werden, in diesem Fall wird sie durch eine automatisch generierte Variable `$_` ersetzt. Das Programm ist dann gleichbedeutend mit dem folgenden:

```raku
for 1..5 {
    say $_;
}
```

Wie Sie sich [erinnern](/de/essentials/hello-world/), ist es möglich, `say` als Methode zu verwenden:

```raku
for 1..5 {
    $_.say;
}
```

Das Aufrufen von Methoden auf `$_` erfordert nicht, dass die Variable selbst erwähnt wird. Unsere Schleife kann also weiter vereinfacht werden:

```raku
for 1..5 {
    .say;
}
```

{% include nav.html %}