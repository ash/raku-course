---
title: Prefissi di istruzione
translations_gpt:
---

{% include menu.html %}

Un _prefisso di istruzione_ è una parola chiave posta davanti a un'istruzione o a un blocco per modificare il modo in cui viene eseguito. Ne avete già incontrato uno — `gather`, che raccoglie tutto ciò che un blocco passa a `take`. Questa sezione presenta alcuni altri prefissi di uso generale.

Con i prefissi potete trasformare un blocco in un'espressione che produce un valore (`do`), controllare se una lista viene calcolata immediatamente o su richiesta (`eager` e `lazy`), ed eseguire codice esclusivamente per i suoi effetti collaterali o con i suoi avvisi soppressi (`sink` e `quietly`).

{% include nav.html %}
