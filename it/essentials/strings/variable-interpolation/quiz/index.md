---
title: 'Quiz: Interpolazione di stringhe'
---

{% include menu.html %}

Seleziona le stringhe, dove il valore di `$x` è interpolato esattamente una volta.

{:.quiz}
1 | &quot;La temperatura è $x gradi&quot;
0 | &apos;La pressione atmosferica è $x mmHg&apos; | Nessuna interpolazione nelle virgolette singole.
0 | &apos;Il valore di \\$x è $x&apos; | Nessuna interpolazione e nessuna escape. Stampa `Il valore di \$x è $x`.
1 | &quot;Il valore di \\$x è $x&quot; | L'intera frase dà, per esempio, `Il valore di $x è 42`.
0 | &quot;Il valore di $x è $x&quot; | `$x` è interpolato due volte qui.

{% include quiz.html %}
{% include nav.html %}