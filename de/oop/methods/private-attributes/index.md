---
title: Private Attribute
translations_gpt:
---

{% include menu.html %}

Im [Abschnitt über Attribute](/de/oop/attributes) wurde jedes Attribut mit `$.` deklariert, was einen öffentlichen Accessor erzeugt. Ein stattdessen mit `$!` deklariertes Attribut ist _privat_: Es hat keinen Accessor und ist von außerhalb des Objekts nicht sichtbar. Erreichbar ist es nur aus den eigenen Methoden der Klasse, wo Sie es als `$!name` ansprechen.

```raku
class Safe {
    has $!code = 4321;

    method unlocks($attempt) {
        return $attempt == $!code;
    }
}

my $safe = Safe.new;
say $safe.unlocks(4321); # True
say $safe.unlocks(1111); # False
```

Der geheime `$!code` wird im Objekt gespeichert, aber nie preisgegeben: Es gibt keinen Accessor `.code`, der einzige Weg, mit ihm umzugehen, führt also über die Methode `unlocks`, die die Klasse bewusst anbietet. Ein Versuch, `$safe.code` oder `$safe!code` zu lesen, scheitert schlicht.

Private Attribute sind nützlich für interne Details, die der Rest des Programms nicht unmittelbar anfassen soll.

{% include nav.html %}
