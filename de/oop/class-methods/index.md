---
title: Klassenmethoden
translations_gpt:
---

{% include menu.html %}

Die meisten Methoden werden auf einem Objekt aufgerufen — einer Instanz einer Klasse. Eine Methode kann aber auch auf der Klasse selbst aufgerufen werden, also auf dem Typobjekt. Eine solche Methode nennt man häufig eine _Klassenmethode_. Sie ist nützlich für Werte und Operationen, die zur Klasse als Ganzem gehören und nicht zu einem bestimmten Objekt.

Sie definieren eine Klassenmethode genau wie jede andere Methode:

```raku
class Road {
    method speed-limit { 120 }
}
```

und rufen sie auf dem Klassennamen statt auf einer Instanz auf:

```raku
say Road.speed-limit; # 120
```

Eine Klassenmethode haben Sie bereits verwendet, ohne sie so zu nennen: `new` ist eine Methode, die auf der Klasse aufgerufen wird, um ein neues Objekt zu erzeugen.

Eine Klassenmethode hat keinen Zugriff auf Instanzattribute — es steht kein bestimmtes Objekt dahinter —, sie arbeitet also nur mit Informationen, die für jedes Objekt der Klasse gleich sind. Hängt die Arbeit von den Daten eines bestimmten Objekts ab, nehmen Sie eine gewöhnliche Methode, die auf einer Instanz aufgerufen wird; andernfalls passt eine Klassenmethode natürlich.

Beachten Sie, dass Klassenmethoden zwar keine Instanz brauchen, aber trotzdem die Daten eines Objekts verwenden können, wenn Sie eines haben:

```raku
class Road {
    has $.name;
    method speed-limit { 120 }

    method info {
        "The maximum speed on $.name is " ~ self.speed-limit
    }
}

my $R404 = Road.new(name => 'Road 404');
say $R404.info;
```

Dieses Programm gibt das erwartete Ergebnis aus:

```
The maximum speed on Road 404 is 120
```

Ohne das instanziierte Klassenobjekt würde ein Aufruf wie `say Road.info` einen Fehler erzeugen.

{% include nav.html %}
