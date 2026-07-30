---
title: Was ist Cro
translations_gpt:
---

{% include menu.html %}

Cro ist eine Sammlung von Bibliotheken, um **Dienste** zu bauen — Programme, die über das Netz mit anderen Programmen sprechen. Am bekanntesten ist es für HTTP, es beherrscht aber auch WebSockets, und es baut alles auf den reaktiven Werkzeugen von früher in diesem Teil auf: [Supplies](/de/paradigms/supplies), `react` und `whenever`. Ein Cro-Anfragebearbeiter ist im Kern eine Reaktion auf einen Strom hereinkommender Anfragen. Seine Heimatseite mit der vollständigen Dokumentation und Beispielen ist [cro.services](https://cro.services).

Was Cro Ihnen gegenüber rohen Sockets gibt:

* **Routing** — URL-Pfade dem Code zuordnen, der sie bearbeitet, statt Anfragen von Hand zu zerlegen.
* **Anfrage- und Antwortobjekte** — Abfrageparameter lesen und JSON senden, ohne Text zusammenzubauen.
* **Nebenläufigkeit** — viele Clients werden zugleich bedient, auf dem Threadpool, ganz von selbst.
* **Zusammensetzbarkeit** — Dienste bestehen aus kleinen Teilen, die Sie prüfen und verbinden können.

Sie installieren es aus dem Ökosystem:

```
zef install cro
```

Cro ist ein großes Framework mit vielen Abhängigkeiten, das dauert also einige Minuten. Bleibt die Installation an einer Abhängigkeitskennung hängen, die sie nicht finden kann — ein Fehler, der etwas wie `JSON::Fast:ver<0.19+>:auth<cpan:TIMOTIMO>` nennt —, ist Ihr `zef` zu alt, um das Archiv zu kennen, das solche historischen Modulkennungen bedient. Bringen Sie den Installierer selbst mit `zef install zef` auf den neuesten Stand, öffnen Sie ein frisches Terminal und starten Sie die Cro-Installation erneut.

Cro führt den ganzen Kurs zusammen: objektorientierten Entwurf für seine Typen, den funktionalen Stil in seinen Bearbeitern und das reaktive Modell für seine Anfrageströme. Das nächste Thema zeigt den kleinstmöglichen Cro-Dienst, damit Sie sehen, wie diese Gedanken in echtem Webcode zusammenkommen.

{% include nav.html %}
