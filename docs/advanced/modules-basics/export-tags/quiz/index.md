---
title: 'Quiz — Export tags'
---

{% include menu.html %}

A module declares `sub hello is export` and `sub goodbye is export(:partings)`. After `use Greeting :partings;`, which subroutines can the program call directly?

{:.quiz}
1 | Only `goodbye`
0 | Only `hello`
0 | Both `hello` and `goodbye`
0 | Neither of them

{% include quiz.html %}

<div class="extended-explanation">

Naming a tag imports that group *instead of* the default one, so `:partings` brings in `goodbye` but leaves `hello` behind. To get both, you would ask for the built-in `:ALL` tag with `use Greeting :ALL;`.

</div>

{% include nav.html %}
