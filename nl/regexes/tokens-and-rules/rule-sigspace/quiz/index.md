---
title: 'Quiz — Tokens en rules'
translations_gpt:
---

{% include menu.html %}

Welk sleutelwoord gebruik je voor een benoemd patroon dat **witruimte** tussen zijn delen moet matchen, zoals die in het patroon geschreven staat?

{:.quiz}
0 | `regex`
0 | `token`
1 | `rule`
0 | `grammar`

{% include quiz.html %}

<div class="extended-explanation">

Een `rule` is een `token` met betekenisvolle witruimte aangezet, dus de spaties die tussen zijn delen geschreven staan moeten in de invoer voorkomen. Een gewone `token` negeert die spaties, en `regex` ook (terwijl die bovendien terugkrabbelt).

</div>

{% include nav.html %}
