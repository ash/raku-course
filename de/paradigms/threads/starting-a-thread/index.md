---
title: Einen Thread starten
translations_gpt:
---

{% include menu.html %}

`Thread.start` nimmt einen Block auf und führt ihn auf einem neuen Thread aus, wobei es ein `Thread`-Objekt liefert, das die laufende Arbeit darstellt:

```raku
my $t = Thread.start({ say 'hello from the thread' });
```

Der Block läuft nebenläufig zum nachfolgenden Code. Das Hauptprogramm wartet **nicht** von selbst auf ihn — es läuft sofort weiter, und der Thread verrichtet seine Arbeit im Hintergrund.

Eine kleine, aber wichtige Einzelheit: Das Argument muss ein Codeblock sein. Ein leeres Paar geschweifter Klammern `{ }` ist eine leere **Hash** und kein leerer Block, ein Thread braucht also stets einen Rumpf, der tatsächlich etwas tut:

```raku
my $t = Thread.start({ 2 + 2 }); # fine: a block with a body
```

Da Hauptprogramm und Thread nun zugleich laufen, können Sie sich nicht auf die Reihenfolge ihrer Ausgaben verlassen — es sei denn, Sie warten ausdrücklich auf das Ende des Threads, das Thema des nächsten Abschnitts.

{% include nav.html %}
