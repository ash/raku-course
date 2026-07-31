---
title: Viktorīna — batch un degree
translations_gpt:
---

{% include menu.html %}

Ko izteiksmē `(1..1000).hyper(:degree(4), :batch(50))` nosaka `:batch(50)`?

{:.quiz}
1 | Cik elementu katrs darbinieks apstrādā vienā piegājienā, pirms ņem vēl
0 | Cik darbapavedienu darbojas vienlaikus
0 | Cik elementu visam konveijeram atļauts apstrādāt
0 | Procesora kodolu skaitu, ko programma drīkst izmantot

{% include quiz.html %}

<div class="extended-explanation">

`:batch` ir **gabala izmērs** — cik elementu darbinieks paņem vienā piegājienā. Darbinieku skaitu nosaka `:degree` (šeit `4`). Lielāka partija samazina saskaņošanas izmaksas; mazāka vienmērīgāk izlīdzina nevienmērīgu darbu. Abi ir mājieni, ko kompilators var pielabot vai ignorēt.

</div>

{% include nav.html %}
