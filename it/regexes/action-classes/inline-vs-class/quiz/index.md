---
title: Quiz — Classi di azione
translations_gpt:
---

{% include menu.html %}

Come dici a `.parse` di usare una classe di azioni chiamata `MyActions`?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

L'oggetto delle azioni si passa con l'argomento nominato `actions`, e deve essere un'**istanza**, creata con `.new`. Mentre la grammatica analizza, i metodi dei token corrispondenti su quell'istanza girano e costruiscono il risultato.

</div>

{% include nav.html %}
