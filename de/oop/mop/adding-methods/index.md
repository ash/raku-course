---
title: Methoden zur Laufzeit hinzufügen
translations_gpt:
---

{% include menu.html %}

Das MOP dient nicht nur der Untersuchung — es kann einen Typ auch **verändern**, während das Programm läuft. Die Metamethode `.^add_method` fügt einer Klasse eine neue Methode hinzu:

```raku
class Empty {
}

Empty.^add_method('greet', method { 'hi' });

say Empty.new.greet; # hi
```

Die Klasse `Empty` ist ganz ohne Methoden definiert. `Empty.^add_method('greet', …)` hängt ihr dann eine Methode namens `greet` an, angegeben als anonyme `method { … }`. Von da an antwortet jedes `Empty`-Objekt auf `.greet`, als wäre sie in die Klasse geschrieben worden.

Das ist echte Metaprogrammierung: Dem Metaobjekt für `Empty` wird gesagt, es solle eine neue Methode wachsen lassen. Dasselbe Protokoll liegt Möglichkeiten zugrunde, die Sie schon genutzt haben — begrifflich baut der Compiler Ihren Typ, wenn Sie `class`, `role`, `has` oder `method` schreiben, stellvertretend für Sie über MOP-Methoden wie `.^add_method` und `.^add_attribute` auf.

„Begrifflich“ deshalb, weil dies ein Modell der Sprache ist und keine Zusage über einen bestimmten Compiler. Das MOP ist das, worin das Objektsystem *spezifiziert* ist; ob eine gegebene Implementierung tatsächlich jede Deklaration über diese Metamethoden leitet — und ob Sie das beobachten können —, bleibt dieser Implementierung überlassen. Aus demselben Grund ist auch das *eigene Aufrufen* dieser Metamethoden implementierungsabhängig: Welche ein Compiler bereitstellt und wie genau sie sich verhalten, kann sich unterscheiden, Code, der zu `.^add_method` und Verwandten greift, läuft also womöglich nicht auf jedem Raku gleich.

Methoden zur Laufzeit hinzuzufügen ist ein mächtiges und selten benötigtes Werkzeug. Die meisten Programme greifen nie danach, aber es ist das, was Rakus Objektsystem offen macht: Die Regeln für Klassen sind selbst in Begriffen des MOP geschrieben, Sie können sie also erweitern. Für alltäglichen Code sind die untersuchenden Metamethoden des vorigen Themas der Teil des MOP, den Sie tatsächlich verwenden werden.

{% include nav.html %}
