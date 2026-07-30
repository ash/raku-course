---
title: 'Quiz — batch en degree'
translations_gpt:
---

{% include menu.html %}

Wat bepaalt de `:batch(50)` in `(1..1000).hyper(:degree(4), :batch(50))`?

{:.quiz}
1 | Hoeveel elementen elke worker in één keer verwerkt voordat hij er meer ophaalt
0 | Hoeveel werkthreads tegelijk lopen
0 | Hoeveel elementen de hele pijplijn mag verwerken
0 | Het aantal CPU-kernen dat het programma mag gebruiken

{% include quiz.html %}

<div class="extended-explanation">

`:batch` is de **brokgrootte** — hoeveel elementen een worker per beurt neemt. Het aantal workers is `:degree` (hier `4`). Een grotere batch snijdt in de coördinatie-overhead; een kleinere verdeelt ongelijk werk gelijkmatiger. Beide zijn hints die de compiler mag bijstellen of negeren.

</div>

{% include nav.html %}
