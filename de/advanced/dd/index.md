---
title: Debugging mit `dd`
---

{% include menu.html %}

Es gibt verschiedene Wege, ein Programm zu debuggen, von einer einfachen Druckanweisung wie `say` bis hin zu ausgefeilteren Tracing-Werkzeugen. In diesem Abschnitt schauen wir uns die praktische `dd`-Routine an. Sie ist in den Rakudo-Compiler eingebaut, gehört aber nicht zum Raku-Sprachstandard selbst.

Der Name `dd` steht für _Data Dumper_. Anders als `say` oder `put`, die für die normale Ausgabe des Programms gedacht sind, gibt `dd` eine entwicklerfreundliche Darstellung eines Wertes aus -- dieselbe codeähnliche Form, die von der [`.raku`-Methode](/de/advanced/representations/raku-method) aus dem vorherigen Abschnitt erzeugt wird. Die Ausgabe erfolgt auf den Standardfehlerstream, sodass sie sich nicht mit den Daten vermischt, die dein Programm für den Benutzer ausgibt.

{% include nav.html %}
