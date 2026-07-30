---
title: Subroutinen übergeben
translations_gpt:
---

{% include menu.html %}

Um eine Subroutine als Parameter aufzunehmen, deklarieren Sie sie mit der Sigil `&`. Im Rumpf können Sie sie dann namentlich aufrufen:

```raku
sub apply(&f, $x) {
    f($x);
}

say apply(* + 3, 10); # 13
```

Der Parameter `&f` erhält ein Stück Code, und `f($x)` ruft es auf. Hier haben wir `* + 3` übergeben, einen _Whatever_-Ausdruck, der „addiere drei zu dem, was du bekommst“ bedeutet, `apply(* + 3, 10)` berechnet also `13`.

Eine benannte Subroutine übergeben Sie ebenso leicht, indem Sie mit der Sigil `&` auf sie verweisen, damit sie übergeben und nicht aufgerufen wird:

```raku
sub double($n) { $n * 2 }

sub apply(&f, $x) {
    f($x);
}

say apply(&double, 5); # 10
```

Genau so arbeiten `map` und `grep`: Es sind Subroutinen, die eine andere Subroutine — Ihren Block — aufnehmen und auf jedes Element anwenden. Eigene Subroutinen zu schreiben, die Code aufnehmen, macht sie ebenso beweglich.

{% include nav.html %}
