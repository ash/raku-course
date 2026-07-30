---
title: Module aus dem Web installieren
---

{% include menu.html %}

Neben den Modulen, die du selbst schreibst, gibt es eine große Sammlung von Modulen, die von der Raku-Community veröffentlicht wurden. Sie decken alles ab, von Web-Frameworks bis hin zu Datenformaten, und du kannst sie installieren und in deinen eigenen Programmen verwenden.

## Der `zef`-Installer

Module werden mit `zef` installiert, dem Standard-Modulmanager, der mit Rakudo mitgeliefert wird. Um ein Modul zu installieren, gibst du `zef` den Namen des Moduls:

```console
$ zef install JSON::Fast
```

`zef` lädt das Modul zusammen mit allen Abhängigkeiten herunter, führt seine Tests aus und installiert es. Sobald ein Modul installiert ist, befindet es sich automatisch im Suchpfad, sodass ein Programm es einfach mit `use` laden kann — die Option `-I` wird nicht benötigt:

```raku
use JSON::Fast;
```

Du kannst auch das Ökosystem durchsuchen und Module aktualisieren oder entfernen:

```console
$ zef search Test
$ zef uninstall JSON::Fast
```

## Woher Module kommen

Veröffentlichte Module befinden sich im Raku-_Ökosystem_. Du kannst es auf der Website [raku.land](https://raku.land) durchstöbern, die die verfügbaren Distributionen und deren Dokumentation auflistet.

## `META6.json`

Eine Distribution, die geteilt werden soll, enthält eine Beschreibungsdatei namens `META6.json`. Sie enthält den Namen der Distribution, die Version, die bereitgestellten Module und die anderen Distributionen, von denen sie abhängt. `zef` liest diese Datei, um zu wissen, was installiert werden muss und wie die Teile zusammenpassen. Wenn du dein eigenes Modul veröffentlichst, ist eine korrekte `META6.json` das, was es für alle anderen installierbar macht.

{% include nav.html %}
