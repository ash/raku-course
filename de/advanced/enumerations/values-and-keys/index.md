---
title: Werte und Schlüssel
---

{% include menu.html %}

Jede Enum-Konstante trägt sowohl einen Namen als auch eine Zahl. Die Methode `.value` gibt die Zahl zurück, und die Methode `.key` gibt den Namen als String zurück:

```raku
enum Colour <red green blue>;

say green.value; # 1
say green.key;   # green
```

Du musst die automatische Nummerierung ab Null nicht akzeptieren. Schreibe die Konstanten als Paare, um die Werte selbst zu wählen:

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Tue.value; # 2
say Fri.value; # 5
```

Hier ist die Arbeitswoche ab eins statt ab Null nummeriert.

Der Enum-Typ selbst kann alle seine Konstanten auflisten. Die Methode `.enums` gibt eine Map von jedem Namen zu seinem Wert zurück:

```raku
enum Colour <red green blue>;

say Colour.enums;       # Map.new((blue => 2, green => 1, red => 0))
say Colour.enums.elems; # 3
```

Mit `.value`, `.key` und `.enums` kannst du frei von einer Konstante zu ihrer Zahl wechseln, von einer Zahl zurück zu Daten, und über die gesamte Menge iterieren — und genau das macht Enums nützlich für Dinge wie Menüs, Zustände und Nachschlagetabellen.

{% include nav.html %}
