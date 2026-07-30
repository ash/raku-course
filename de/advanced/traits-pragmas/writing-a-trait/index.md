---
title: Einen Trait schreiben
translations_gpt:
---

{% include menu.html %}

Traits sind gewöhnliche Multi-Subroutinen mit einem speziellen Namen, sodass Sie Ihre eigenen schreiben können. Um ein Trait mit der Schreibweise `is something` hinzuzufügen, definieren Sie ein `multi sub trait_mod:<is>`, dessen Parameter angeben, worauf es sich bezieht, und das Trait benennen:

Dies ist eine der fortgeschritteneren Ecken von Raku, also machen Sie sich keine Sorgen, wenn es kompliziert wirkt. Sie können die eingebauten Traits problemlos verwenden, ohne zu wissen, wie sie aufgebaut sind, und Sie werden selten eines selbst schreiben müssen — betrachten Sie diese Seite als einen Blick unter die Haube.

```raku
my @traced;

multi sub trait_mod:<is>(Routine:D $r, :$traced!) {
    @traced.push($r.name);
}

sub foo() is traced { }
sub bar() is traced { }

say @traced; # [foo bar]
```

Lesen Sie die Signatur: Der erste Parameter, `Routine:D $r`, ist das Element, an das das Trait angehängt wird — hier eine Subroutine. Das `:D` ist ein Typ-_Smiley_, der einen **definierten** Wert verlangt — ein tatsächliches Routine-Objekt, nicht den bloßen, undefinierten Typ `Routine` selbst. (Seine Partner sind `:U`, das das undefinierte Typ-Objekt erfordert, und `:_`, das beides akzeptiert.) Der benannte Parameter `:$traced!` ist der eigene Name des Traits; sein Vorhandensein bewirkt, dass `is traced` diese Sub aufruft. Da Traits zur **Kompilierzeit** ausgeführt werden, sind sowohl `foo` als auch `bar` registriert, sobald sie deklariert werden, sodass `@traced` sie bereits auflistet, wenn das Programm läuft — Sie könnten sogar die Zeile `say @traced` über die beiden `sub`-Definitionen verschieben, und sie würde trotzdem `[foo bar]` ausgeben.

Dieses kleine Trait zeichnet nur Namen auf, aber derselbe Mechanismus kann viel mehr: eine Routine umhüllen, um Protokollierung hinzuzufügen, ein Attribut validieren oder Metadaten anhängen. Wenn Sie den ersten Parameter als `Attribute` oder `Variable` statt als `Routine` schreiben, kann ein Trait auf Attribute oder Variablen angewendet werden. Traits sind der Weg, wie Raku seine Deklarationssyntax offen hält — `is rw` und Ihr eigenes `is traced` sind auf dieselbe Weise aufgebaut.

{% include nav.html %}
