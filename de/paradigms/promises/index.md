---
title: Promises
translations_gpt:
---

{% include menu.html %}

Ein _Promise_ steht für ein Stück Arbeit, das irgendwann fertig sein und ein Ergebnis liefern wird (oder scheitert). Promises sind der alltägliche, übergeordnete Weg, in Raku nebenläufig zu arbeiten: Sie starten Arbeit, bekommen sofort ein Promise zurück und holen das Ergebnis ab, wenn Sie es brauchen.

Anders als rohe Threads lassen sich Promises leicht verbinden — Sie können auf mehrere zugleich warten oder eines an das Ergebnis eines anderen anhängen. Und wo ein Thread Sie nur auf das Ende der Arbeit *warten* lässt, überreicht Ihnen das Abwarten eines Promise den **Wert**, den es erzeugt hat — und wirft jeden Fehler erneut, auf den es gestoßen ist —, sodass Sie selten selbst Ergebnisse über gemeinsame Variablen herumreichen müssen. Dieser Abschnitt behandelt das Starten von Promises, das Abwarten ihrer Ergebnisse und ihr Zusammenspiel.

{% include nav.html %}
