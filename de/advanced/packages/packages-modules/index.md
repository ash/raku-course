---
title: Pakete und Module
---

{% include menu.html %}

Das Schlüsselwort `package` führt einen Namensraum ein. Alles, was darin mit `our` deklariert wird, wird Teil dieses Namensraums und kann von außen über den Package-Namen und den `::`-Trenner erreicht werden:

```raku
package Maths {
    our $pi = 3.14;
    our sub double($x) { $x * 2 }
}

say $Maths::pi;         # 3.14
say Maths::double(5);   # 10
```

Die Variable wird als `$Maths::pi` erreicht — das Sigil, dann der Package-Name, dann der Variablenname. Eine Subroutine wird als `Maths::double(...)` aufgerufen.

Sowohl `package` als auch `module` erzeugen einen Namensraum; sie unterscheiden sich darin, was sie darüber hinaus tun. Ein `module` ist die übliche Wahl für eine Einheit wiederverwendbaren Codes, während ein einfaches `package` nur der Namensraum ohne Extras ist. (Eine `class`, die du im [nächsten Teil](/de/oop) kennenlernen wirst, erzeugt ebenfalls einen Namensraum und fügt zusätzlich objektorientierte Mechanismen hinzu.)

```raku
module Greet {
    our sub hello { 'hi' }
}

say Greet::hello; # hi
```

Der Namensraum, den du bisher von `module` erhalten hast, ist also derselbe Mechanismus, den ein `package` allein bereitstellt. Die Wahl zwischen ihnen ist hauptsächlich eine Frage der Absicht: `module` für Bibliotheken, `package` für einen reinen Namensraum — und, sobald du bei Objekten angekommen bist, `class` für Typen.

{% include nav.html %}
