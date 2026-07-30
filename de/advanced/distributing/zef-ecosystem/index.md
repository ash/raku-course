---
title: zef und das Ökosystem
---

{% include menu.html %}

`zef` ist Rakus Modul-Installer. Du hast es bereits verwendet, um Module über den Namen zu installieren; es funktioniert auch mit einem lokalen Distributionsverzeichnis. Innerhalb einer Distribution kannst du sie direkt testen und installieren:

```
zef test .
zef install .
```

`zef test .` führt die Dateien unter `t/` aus, und `zef install .` installiert die Distribution in dein Raku, sodass andere Programme sie mit `use` einbinden können. Die Installation über den Namen — `zef install Cro` — macht dasselbe, nachdem die Distribution zuerst aus dem Ökosystem heruntergeladen wurde.

Um deine eigene Distribution zu **veröffentlichen**, damit andere sie über den Namen installieren können, lädst du sie in das Ökosystem hoch. Das übliche Werkzeug dafür ist `fez`:

```
fez upload
```

Damit wird die aktuelle Distribution verpackt und an das Raku-Ökosystem übermittelt, wonach `zef install Maths::Simple` für jeden funktioniert.

> Diese Befehle erfordern eine installierte Version von `zef`/`fez` und Netzwerkzugang, und das Hochladen erfordert ein Ökosystem-Konto.

Der Lebenszyklus eines geteilten Moduls ist also: es mit einer `META6.json` einrichten, mit `zef test` testen und mit `fez upload` veröffentlichen. Ab dann ist es einfach ein weiterer Name, den jeder mit `zef install` installieren kann.

{% include nav.html %}
