---
title: Mehrere Rollen zusammensetzen
translations_gpt:
---

{% include menu.html %}

Eine Klasse kann mehr als eine Rolle erfüllen. Sie führen jede einfach mit ihrem eigenen `does` auf:

```raku
role Walk {
    method move { 'walking' }
}

role Swim {
    method dive { 'diving' }
}

class Duck does Walk does Swim {
}
```

Die Klasse `Duck` hat nun sowohl die Methode `move` aus `Walk` als auch die Methode `dive` aus `Swim`:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Rollen auf diese Weise zu verbinden nennt man _Komposition_. Sie erlaubt es, eine Klasse aus mehreren unabhängigen Verhaltensbausteinen zusammenzusetzen, was oft flexibler ist, als eine einzige Vererbungskette zu bauen — eine Klasse kann genau die Fähigkeiten einmischen, die sie braucht, und nicht mehr.

{% include nav.html %}
