---
title: Module erstellen
---

{% include menu.html %}

Wenn Programme wachsen, ist es hilfreich, sie in wiederverwendbare Teile aufzuteilen. Ein _Modul_ ist eine Code-Einheit, die in einer eigenen Datei gespeichert ist und von anderen Programmen geladen und verwendet werden kann.

Eine Moduldatei hat die Erweiterung `.rakumod` und beginnt mit der Benennung des Moduls durch `unit module`. Subroutinen, die du darin schreibst, sind standardmäßig privat; um eine für Code verfügbar zu machen, der das Modul verwendet, markiere sie mit dem Trait `is export`.

Hier ist ein Modul, das in einer Datei namens `Greeting.rakumod` gespeichert ist:

```raku
unit module Greeting;

sub hello($name) is export {
    return "Hello, $name!";
}
```

Die Subroutine `hello` trägt `is export`, sodass sie für jedes Programm sichtbar ist, das das Modul verwendet. Eine Subroutine ohne `is export` würde privat im Modul bleiben.

Ein Modul kann auch Daten über `our`-Variablen teilen, die über den Namen des Moduls erreichbar werden. Eine Versionsnummer zu `Greeting` hinzuzufügen ist so einfach wie eine weitere Zeile in der Datei:

```raku
our $version = '1.0';
```

Mit dieser Zeile in `Greeting.rakumod` ist der Wert überall dort als `$Greeting::version` verfügbar, wo das Modul geladen wird.

Die nächsten Themen zeigen, [wie ein Programm ein solches Modul lädt](/de/advanced/modules-basics/using-modules) und was es genau davon erhält.

{% include nav.html %}
