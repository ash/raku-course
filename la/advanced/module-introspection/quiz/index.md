---
title: Quiz — Stash
translations_gpt: true
---

{% include menu.html %}

Modulus `Greeting` subroutinam `hello` exportat et `our $version` definit. Quid `Greeting::.keys.sort` reddit?

{:.quiz}
1 | ($version EXPORT)
0 | ($version)
0 | ($version &hello)
0 | (hello version)

{% include quiz.html %}

<div class="extended-explanation">

`$version` est variabilis `our` moduli, cum sigillo suo enumerata. `EXPORT` est fasciculus quem Raku automatice addit ad nomina `is export` ferenda, itaque `hello` exportata ibi apparet potius quam ut proprium nomen fasciculi.

</div>

{% include nav.html %}
