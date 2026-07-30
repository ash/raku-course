---
title: Rollen
translations_gpt:
---

{% include menu.html %}

Eine _Rolle_ ist ein Bündel aus Verhalten (und mitunter Daten), das sich mehrere Klassen teilen können. Wo Vererbung sagt, eine Klasse _sei_ eine Art einer anderen, beschreibt eine Rolle etwas, das eine Klasse _kann_.

Sie definieren eine Rolle mit dem Schlüsselwort `role`, ganz ähnlich wie eine Klasse, und geben sie einer Klasse mit dem Trait `does`:

```raku
role Greet {
    method hello {
        'Hello from ' ~ self.name;
    }
}

class Person does Greet {
    has $.name;
}
```

Die Klasse `Person` hat nun die Methode `hello` aus der Rolle, als wäre sie in der Klasse selbst geschrieben:

```raku
say Person.new(name => 'Anna').hello; # Hello from Anna
```

Eine Klasse, die eine Rolle erfüllt, wird auch als Trägerin dieser Rolle erkannt:

```raku
say Person.new(name => 'Anna') ~~ Greet; # True
```

Beachten Sie, dass die Methode `hello` der Rolle `self.name` verwendet, obwohl die Rolle selbst kein Attribut `name` hat. Das ist in Ordnung: Die Methode läuft als Teil derjenigen Klasse, die die Rolle einbindet, und diese Klasse liefert `name`. Das nächste Thema zeigt, dass eine Klasse mehr als eine Rolle zugleich übernehmen kann.

{% include nav.html %}
