---
title: Einem Objekt eine Rolle hinzufügen
translations_gpt:
---

{% include menu.html %}

Eine Rolle muss nicht fest in eine Klasse eingebaut sein. Sie können eine auch einem bereits bestehenden Objekt geben, mit dem Operator `but`. Er mischt die Rolle zur Laufzeit in ein einzelnes Objekt und liefert ein neues Objekt, das die Rolle spielt:

```raku
role Loud {
    method greet {
        callsame().uc;
    }
}

class Greeter {
    method greet {
        'Hello';
    }
}

my $quiet = Greeter.new;
my $loud  = Greeter.new but Loud;

say $quiet.greet; # Hello
say $loud.greet;  # HELLO
```

Nur `$loud` hat die Rolle erhalten. Die Klasse `Greeter` und jedes andere `Greeter`-Objekt bleiben unberührt, `$quiet` grüßt also weiterhin auf die gewöhnliche Weise. Wenn Rolle und Klasse beide eine Methode gleichen Namens definieren, gewinnt die Fassung der Rolle, und `callsame` ruft diejenige auf, die sie überschrieben hat — hier das ursprüngliche `greet` aus `Greeter`, dessen Ergebnis anschließend in Großbuchstaben gesetzt wird.

Ein Objekt, in das eine Rolle eingemischt wurde, wird als Träger dieser Rolle erkannt:

```raku
say $quiet ~~ Loud; # False
say $loud  ~~ Loud; # True
```

`but` lässt das ursprüngliche Objekt, wie es war, und reicht Ihnen ein neues. Wenn Sie ein bestehendes Objekt lieber an Ort und Stelle ändern möchten, nehmen Sie stattdessen den Operator `does`:

```raku
my $speaker = Greeter.new;
$speaker does Loud;
say $speaker.greet; # HELLO
```

Rollen in einzelne Objekte einzumischen erlaubt Ihnen, Objekt für Objekt zu entscheiden, welches zusätzliche Verhalten es übernehmen soll — ohne für jede Kombination eine eigene Klasse zu definieren.

{% include nav.html %}
