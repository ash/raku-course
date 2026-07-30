---
title: Hyper und race
translations_gpt:
---

{% include menu.html %}

Die funktionalen Listenoperationen, die Ihnen früher begegnet sind — `map` und `grep` —, verarbeiten ihre Elemente eines nach dem anderen. Ist die Arbeit an jedem Element unabhängig und erheblich, kann Raku sie **parallel** über mehrere CPU-Kerne ausführen, fast ohne Änderung an Ihrem Code.

Zwei Methoden schalten das ein: `.hyper`, das die Ergebnisse in Reihenfolge hält, und `.race`, das das nicht tut, dafür aber ein wenig schneller sein kann. Dieser Abschnitt zeigt beide.

{% include nav.html %}
