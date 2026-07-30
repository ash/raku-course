---
title: Quiz — Operatorkategorien
translations_gpt:
---

{% include menu.html %}

Welcher Kategorie gehört der Subscript `[0]` im Ausdruck `@a[0]` an?

{:.quiz}
0 | postfix
1 | postcircumfix
0 | circumfix
0 | infix

{% include quiz.html %}

<div class="extended-explanation">

Ein Subscript umschließt seinen Inhalt mit Klammern *und* folgt auf einen Term (hier `@a`), was ihn zu einem Postcircumfix-Operator macht. Ein einfacher Postfix (wie `++`) benötigt keine umschließenden Klammern, und ein Circumfix (wie der Array-Konstruktor `[1, 2, 3]`) umschließt, folgt aber nicht auf einen Term.

</div>

{% include nav.html %}
