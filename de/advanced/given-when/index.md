---
title: '`given` und `when`'
---

{% include menu.html %}

Wenn ein Programm zwischen mehreren Alternativen wählen muss, kann eine Kette von `if`- und `elsif`-Prüfungen lang und repetitiv werden. In dieser Situation ist das `given`/`when`-Konstrukt oft übersichtlicher. Es ähnelt der `switch`-Anweisung aus anderen Sprachen.

Der `given`-Block nimmt einen Wert entgegen und macht ihn zum _Thema_ -- der speziellen Variable `$_`. Jeder `when`-Block wird dann mit diesem Thema verglichen, und der erste passende wird ausgeführt:

```raku
my $n = 2;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    when 3 { say 'three' }
}
```

Dieses Programm gibt aus:

```
two
```

Anders als bei `switch` in manchen anderen Sprachen gibt es kein Fall-Through: Sobald ein `when` passt, wird sein Block ausgeführt und der `given`-Block ist beendet. Die verbleibenden `when`-Blöcke werden nicht mehr geprüft.

## Der `default`-Block

Ein `default`-Block wird ausgeführt, wenn keiner der `when`-Blöcke gepasst hat. Er spielt dieselbe Rolle wie der `else`-Zweig einer `if`-Anweisung:

```raku
my $n = 5;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    default { say 'many' }
}
```

Da `$n` weder `1` noch `2` ist, gibt das Programm aus:

```
many
```

{% include nav.html %}
