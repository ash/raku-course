---
title: Викторина — Ограничения типов
---

{% include menu.html %}

Выберите допустимые присваивания в Raku.

{:.quiz}
1 | my Int $a = π.Int;
0 | my Int $b = π; | `π` является `Num`, поэтому его нельзя напрямую присвоить `Int`.
0 | my Rat $c = π.Int; | Даже если `π.Int` равно `3` и является «уже» типом, чем `Rat`, присвоение невозможно.
1 | my Rat $d = π.Str.Rat; | Двойное преобразование типов, просто для развлечения, в этом нет особого смысла, но это допустимо.
0 | my Num $e = π.Int;
1 | my Num $f = π.Int.Str.Num;

{% include quiz.html %}

{% include nav.html %}