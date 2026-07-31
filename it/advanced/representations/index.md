---
title: Trasformare valori in testo
---

{% include menu.html %}

Ogni volta che un programma mostra un valore — quando lo si stampa con `say`, con `print`, o lo si inserisce in una stringa — quel valore deve essere convertito in testo. Raku non ha un unico modo fisso per farlo. Invece, ogni valore porta con sé alcuni metodi standard, ciascuno dei quali produce una stringa per uno scopo diverso:

* `.gist` — una forma leggibile e pensata per l'uomo, quella che `say` stampa.
* `.Str` — la forma stringa semplice, usata nel contesto stringa.
* `.raku` — una forma simile al codice, utile durante il debug.

Tutti e tre sono metodi ordinari definiti per ogni valore del linguaggio, quindi funzionano allo stesso modo su un numero, una stringa, un array o un oggetto creato da te. Le pagine seguenti esaminano ciascun metodo a turno e poi ti aiutano a scegliere quello giusto; [la sezione successiva introduce `dd`](/it/advanced/dd), uno strumento di Rakudo costruito sopra `.raku`.

{% include nav.html %}
