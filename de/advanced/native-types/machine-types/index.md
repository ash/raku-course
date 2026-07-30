---
title: Maschinennahe Typen
---

{% include menu.html %}

Die nativen Typen haben kleingeschriebene Namen: `int`, `num` und `str`. Du deklarierst eine Variable mit einem davon genauso wie mit `Int` oder `Str`:

```raku
my int $i = 42;
my num $n = 3.14e0;
say $i; # 42
say $n; # 3.14
```

Ein nativer Wert entspricht direkt einem Maschinenregister oder -wort, ohne das Wrapper-Objekt, das ein normaler Raku-Wert mit sich trägt. Dadurch sind native Typen schneller und kompakter, was in engen numerischen Schleifen und großen Arrays wichtig ist.

Es gibt ein Verhalten, das du sofort kennen solltest: Eine native Variable kann niemals undefiniert sein. Während ein gewöhnlicher `Int`-Container als undefiniertes `Any` beginnt, startet ein nativer `int` bei **Null**:

```raku
say (my Int $a); # (Int)
say (my int $b); # 0
```

Das Gleiche gilt für native Arrays, die deklariert werden, indem der native Typ vor die `@`-Variable gesetzt wird:

```raku
my int @numbers = 10, 20, 30;
say @numbers.sum; # 60
```

Ein solches Array speichert seine Elemente als rohe Maschinen-Ganzzahlen und nicht als geboxte `Int`-Objekte, wodurch es weniger Speicher verbraucht. Wenn du einen nativen Wert introspektierst, wird er automatisch in den passenden vollwertigen Typ _geboxt_, weshalb `(my int $b).WHAT` als Ergebnis `(Int)` liefert.

{% include nav.html %}
