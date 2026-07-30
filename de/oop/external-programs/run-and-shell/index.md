---
title: run und shell
translations_gpt:
---

{% include menu.html %}

Es gibt zwei Wege, ein externes Programm zu starten. Die Funktion `run` nimmt den Befehl und seine Argumente als **getrennte** Werte und führt das Programm unmittelbar aus, ohne eine Shell einzubeziehen:

```raku
run 'echo', 'hello';
```

Das führt das Programm `echo` mit dem einzigen Argument `hello` aus, was `hello` ausgibt. Weil die Argumente getrennt übergeben werden, besteht keine Gefahr, dass die Shell Leerzeichen oder Sonderzeichen falsch deutet — `run` ist die sichere Standardwahl.

Die Funktion `shell` übergibt stattdessen eine **einzelne Zeichenkette** an die System-Shell, die sie auswertet. Damit können Sie Shell-Möglichkeiten wie Pipes und Umleitungen nutzen:

```raku
shell 'echo hello | tr a-z A-Z';
```

Hier führt die Shell `echo` aus, leitet dessen Ausgabe durch `tr` und gibt `HELLO` aus. Die Bequemlichkeit kommt mit einer Warnung: Weil die Shell die Zeichenkette zerlegt, ist es gefährlich, einen `shell`-Befehl aus nicht vertrauenswürdiger Eingabe zusammenzusetzen. Ziehen Sie `run` vor, solange Sie nicht ausdrücklich Shell-Möglichkeiten brauchen.

Beide liefern ein `Proc`-Objekt, das beschreibt, wie das Programm geendet hat. Standardmäßig teilt sich das gestartete Programm die Ausgabe Ihres Programms, was es ausgibt, erscheint also am Bildschirm. Um diese Ausgabe stattdessen aufzufangen, fordern Sie sie an — das Thema des nächsten Abschnitts.

{% include nav.html %}
