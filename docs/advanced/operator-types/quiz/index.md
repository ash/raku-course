---
title: 'Quiz — Operator categories'
---

{% include menu.html %}

In the expression `@a[0]`, what category does the `[0]` subscript belong to?

{:.quiz}
0 | postfix
1 | postcircumfix
0 | circumfix
0 | infix

{% include quiz.html %}

<div class="extended-explanation">

A subscript surrounds its content with brackets *and* follows a term (here `@a`), which makes it a postcircumfix operator. A plain postfix (like `++`) takes no surrounding brackets, and a circumfix (like the array constructor `[1, 2, 3]`) surrounds but does not follow a term.

</div>

{% include nav.html %}
