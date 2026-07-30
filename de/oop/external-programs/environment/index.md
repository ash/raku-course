---
title: Die Umgebung
translations_gpt:
---

{% include menu.html %}

Jedes Programm wird mit einem Satz von _Umgebungsvariablen_ gestartet — benannten Werten wie `HOME`, `PATH` oder `USER`, die das Betriebssystem bereitstellt. In Raku stehen sie in der dynamischen Hash `%*ENV` zur Verfügung:

```raku
say %*ENV<HOME>; # the home directory, e.g. /home/anna
```

Sie lesen eine Umgebungsvariable, indem Sie `%*ENV` mit ihrem Namen indizieren. Da es eine gewöhnliche Hash ist, können Sie auch prüfen, ob eine Variable gesetzt ist, oder sie für Programme ändern, die Sie starten:

```raku
%*ENV<GREETING> = 'Hello';
say %*ENV<GREETING>; # Hello
```

Einen Schlüssel in `%*ENV` zu setzen fügt ihn der Umgebung hinzu, die jedes danach mit `run` oder `shell` gestartete Programm erbt — so reichen Sie Konfiguration an ein Kindprogramm weiter:

```raku
%*ENV<GREETING> = 'Hello';

my $proc = run 'sh', '-c', 'echo $GREETING', :out;
say $proc.out.slurp(:close).chomp; # Hello
```

Die Variable wird in der Umgebung Ihres Programms gesetzt, *bevor* das Kind gestartet wird, die von `run` gestartete Shell hat `GREETING` also bereits in ihrer eigenen Umgebung und kann es zurückgeben. Jede so gesetzte Variable erreicht jedes Programm, das Sie danach starten.

Der Twigil `*` sagt Ihnen, dass `%*ENV` eine dynamische Variable ist, wie `$*OUT` aus dem Teil über Ein- und Ausgabe. Einige weitere Variablen mit Stern beschreiben die Welt des laufenden Programms — `@*ARGS` enthält die Befehlszeilenargumente, und `$*PROGRAM-NAME` ist der Name des Skripts selbst. Zusammen erlauben sie einem Programm, den Zusammenhang zu verstehen, in dem es gestartet wurde.

{% include nav.html %}
