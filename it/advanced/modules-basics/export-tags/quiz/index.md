---
title: Quiz — Tag di esportazione
translations_gpt: 'Quiz — Tag di esportazione'
---

{% include menu.html %}

Un modulo dichiara `sub hello is export` e `sub goodbye is export(:partings)`. Dopo `use Greeting :partings;`, quali subroutine puo chiamare direttamente il programma?

{:.quiz}
1 | Solo `goodbye`
0 | Solo `hello`
0 | Sia `hello` sia `goodbye`
0 | Nessuna delle due

{% include quiz.html %}

<div class="extended-explanation">

Specificare un tag importa quel gruppo *al posto di* quello predefinito, quindi `:partings` porta `goodbye` ma lascia indietro `hello`. Per ottenere entrambe, si dovrebbe richiedere il tag integrato `:ALL` con `use Greeting :ALL;`.

</div>

{% include nav.html %}
