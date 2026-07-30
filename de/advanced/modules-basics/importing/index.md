---
title: Importieren
---

{% include menu.html %}

Es gibt mehr als einen Weg, ein Modul in ein Programm einzubinden. Die drei Anweisungen `use`, `need` und `require` unterscheiden sich darin, _wann_ das Modul geladen wird und _was_ es verfügbar macht.

## `use`

Du hast `use` bereits kennengelernt. Es lädt das Modul zur Kompilierzeit und importiert seine exportierten Namen, sodass sie direkt aufgerufen werden können:

```raku
use Greeting;
say hello('Anna'); # Hello, Anna!
```

## `need`

`need` lädt das Modul ebenfalls zur Kompilierzeit, importiert aber _nicht_ die exportierten Namen. Du erreichst die `our`-Variablen des Moduls weiterhin über den Modulnamen:

```raku
need Greeting;
say $Greeting::version; # 1.0
```

Nach `need Greeting` würde ein einfaches `hello(...)` nicht erkannt werden, da nichts importiert wurde — nur die qualifizierten Namen wie `$Greeting::version` sind verfügbar.

## `require`

`require` lädt das Modul zur _Laufzeit_ statt zur Kompilierzeit. Das ist nützlich, wenn du erst während der Programmausführung weißt, ob ein Modul benötigt wird, zum Beispiel wenn sein Name durch Benutzereingabe bestimmt wird.

Da das Laden zur Laufzeit geschieht, wird nichts automatisch importiert. Wenn du die gewünschten Symbole in spitzen Klammern nach dem Namen auflistest, werden sie eingebunden, sodass sie direkt aufgerufen werden können:

```raku
require Greeting <&hello>;
say hello('Anna'); # Hello, Anna!
```

Für den alltäglichen Gebrauch ist `use` die richtige Wahl; `need` und `require` sind für die weniger häufigen Fälle da.

{% include nav.html %}
