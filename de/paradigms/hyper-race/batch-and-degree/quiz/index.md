---
title: 'Quiz — batch und degree'
translations_gpt:
---

{% include menu.html %}

Was steuert das `:batch(50)` in `(1..1000).hyper(:degree(4), :batch(50))`?

{:.quiz}
1 | Wie viele Elemente jeder Arbeiter auf einmal verarbeitet, bevor er weitere holt
0 | Wie viele Arbeits-Threads zugleich laufen
0 | Wie viele Elemente die ganze Pipeline verarbeiten darf
0 | Die Zahl der CPU-Kerne, die das Programm nutzen darf

{% include quiz.html %}

<div class="extended-explanation">

`:batch` ist die **Portionsgröße** — wie viele Elemente ein Arbeiter je Runde nimmt. Die Zahl der Arbeiter ist `:degree` (hier `4`). Eine größere Portion senkt den Koordinationsaufwand; eine kleinere gleicht ungleiche Arbeit besser aus. Beides sind Hinweise, die der Compiler anpassen oder übergehen darf.

</div>

{% include nav.html %}
