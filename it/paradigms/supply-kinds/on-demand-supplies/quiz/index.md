---
title: Quiz — Tipi di supply
translations_gpt:
---

{% include menu.html %}

Per un supply **su richiesta** come `Supply.from-list`, che cosa riceve una seconda presa?

{:.quiz}
0 | Niente — la prima presa ha consumato i valori
0 | Solo i valori emessi dopo che si è agganciata
1 | L'intera sequenza, dall'inizio
0 | Un errore

{% include quiz.html %}

<div class="extended-explanation">

Un supply su richiesta riproduce di nuovo i propri valori per ogni presa. Ogni presa è indipendente e riceve la sequenza completa dall'inizio — a differenza di un supply dal vivo, dove gli abbonati tardivi si perdono i valori precedenti.

</div>

{% include nav.html %}
