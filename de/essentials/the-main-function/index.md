---
title: Die MAIN-Funktion
---

{% include menu.html %}

Ein Raku-Programm benötigt keine Boilerplate-Rituale, sodass Sie sofort nützliche Anweisungen schreiben können. Dieser Teil des Programms, der sich auf der Ebene über jedem [Codeblock](/de/essentials/code-blocks) (einschließlich [Funktionen](/de/essentials/functions), zum Beispiel) befindet, wird _mainline_ genannt.

Wenn das Programm eine Funktion mit dem speziellen Namen `MAIN` enthält, führt Raku diese Funktion aus, nachdem es alles kompiliert und nachdem der mainline-Code ausgeführt wurde.

```raku
say '1. Mainline-Code';

sub MAIN {
    say '3. MAIN aufgerufen';
}

say '2. Auch mainline';
```

Dieses Programm führt zuerst die `say`s auf der obersten Ebene aus und ruft dann `MAIN` auf:

```console
$ raku t.raku
1. Mainline-Code
2. Auch mainline
3. MAIN aufgerufen
```

Natürlich ist es auch möglich, ein Programm mit der `MAIN`-Funktion und keinem anderen mainline-Code zu haben.

{% include nav.html %}