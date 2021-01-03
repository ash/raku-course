---
title: Quiz — Function parameters
---

{% include menu.html %}

Choose those options where the function signature is correct.

{:.quiz}
1 | sub f($x) {. . .}
1 | sub f() {. . .} | No parameters ia a valid situation.
1 | sub f {. . .} | Parenthese are not required here.
0 | sub f $x {. . .} | But they are required if there are parameters.
1 | sub f($x, $y) {. . .}
0 | sub f($x $y) {. . .} | Parameters is a comma-separated list.
1 | sub f($x,$y) {. . .} | It is up to use to put a omit a space between parameters.
1 | sub f($y, $x) {. . .} | Parameters can have any names in any order.
0 | sub f ($x), ($y) {. . .} | Non-existing syntax.

{% include quiz.html %}

{% include nav.html %}
