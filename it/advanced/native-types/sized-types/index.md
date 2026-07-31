---
title: Tipi dimensionati e overflow
---

{% include menu.html %}

Oltre al semplice `int`, Raku dispone di interi con una larghezza in bit fissa: `int8`, `int16`, `int32`, `int64` e le loro controparti senza segno `uint8`, `uint16`, `uint32`, `uint64`. Il numero indica quanti bit occupa il valore.

Una larghezza fissa significa un intervallo fisso. Un `int8` contiene valori da `-128` a `127`; un `uint8` contiene da `0` a `255`. Poiché lo spazio di memorizzazione non può crescere, superare il massimo fa ricominciare dal minimo — questo è l'_overflow_:

```raku
my int8 $i = 127;
$i++;
say $i; # -128
```

Aggiungere uno al valore massimo di `int8` non produce `128` (che non ci starebbe); il valore si riavvolge al minimo, `-128`. Anche i tipi senza segno si riavvolgono:

```raku
my uint8 $u = 255;
$u++;
say $u; # 0
```

Questo è l'opposto di un normale `Int`, che semplicemente cresce quanto necessario e non va mai in overflow. Il compromesso è proprio il punto dei nativi con dimensione fissa: si accetta un intervallo limitato in cambio di una memorizzazione prevedibile, compatta e veloce.

Usa un tipo nativo con dimensione fissa quando conosci l'intervallo dei tuoi dati e vuoi l'efficienza — ad esempio, byte di dati binari in un array `uint8`. Per l'aritmetica ordinaria dove i numeri possono crescere senza limiti, resta con `Int`.

{% include nav.html %}
