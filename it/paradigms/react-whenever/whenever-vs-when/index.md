---
title: whenever e when
translations_gpt:
---

{% include menu.html %}

La forma di un blocco `react` può sembrare familiare. Un blocco esterno che contiene parecchi blocchi interni, ciascuno che agisce sull'argomento corrente `$_`, è esattamente il modo in cui si scrive [`given`/`when`](/it/advanced/given-when). Se avessi una singola lettura di temperatura invece di un intero flusso di esse, vi ti dirameresti così:

```raku
given $temperature {
    when 18 { say 'cool' }
    when 21 { say 'warm' }
}
```

La somiglianza con `react`/`whenever` è reale, ma i due fanno lavori molto diversi:

* **`given`/`when` gestisce un valore, adesso.** `given` imposta `$_` a un unico valore; ogni `when` lo mette alla prova (`$_ ~~ 18`), gira la **prima** corrispondenza e il blocco è finito. È una condizione ordinaria e sincrona.
* **`react`/`whenever` gestisce molti valori, nel tempo.** Un `whenever` non mette alla prova `$_` contro uno schema: si *abbona* a un supply, e il suo corpo gira per **ogni** valore che quel supply emette, quando quel valore arriva. Tutti i `whenever` sono vivi insieme, e `react` continua a bloccare finché ognuno dei loro supply non è finito.

Quindi `when` chiede «questo unico valore corrisponde?», mentre `whenever` dice «per ogni valore che questo flusso produrrà mai, fai questo». Stesso scheletro, vite molto diverse: una diramazione presa una volta sola, contro una reazione che gira ancora e ancora man mano che gli eventi arrivano.

{% include nav.html %}
