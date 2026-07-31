---
title: Quiz — Ereditare una grammatica
translations_gpt:
---

{% include menu.html %}

Quale parola chiave fa ereditare una grammatica da un'altra?

{:.quiz}
1 | `is`
0 | `does`
0 | `extends`
0 | `inherits`

{% include quiz.html %}

<div class="extended-explanation">

Una grammatica è un genere di classe, quindi usa la stessa parola chiave di ereditarietà: `grammar Loud is Base { … }`. La grammatica derivata eredita allora i token della base e può sovrascriverne singoli.

</div>

{% include nav.html %}
