---
title: 'Quiz — Arten von Supplies'
translations_gpt:
---

{% include menu.html %}

Was erhält bei einem **On-demand**-Supply wie `Supply.from-list` eine zweite Zapfstelle?

{:.quiz}
0 | Nichts — die erste Zapfstelle hat die Werte aufgebraucht
0 | Nur die Werte, die nach ihrem Anzapfen ausgesandt wurden
1 | Die ganze Folge, von Anfang an
0 | Einen Fehler

{% include quiz.html %}

<div class="extended-explanation">

Ein On-demand-Supply spielt seine Werte für jede Zapfstelle erneut ab. Jede Zapfstelle ist unabhängig und erhält die vollständige Folge von Anfang an — anders als bei einem Live-Supply, wo späte Abonnenten frühere Werte verpassen.

</div>

{% include nav.html %}
