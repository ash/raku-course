---
title: Veröffentlichen mit fez
---

{% include menu.html %}

Im vorherigen Thema wurde `fez` als Möglichkeit vorgestellt, eine Distribution in das Raku-Ökosystem hochzuladen. Du musst `fez` nicht verwenden — es ist nicht die einzige Möglichkeit zu veröffentlichen — aber es ist die häufigste Wahl, und es kann mehr als nur hochladen: es kann auch eine neue Distribution für dich einrichten und dein Autoren-Konto verwalten. Installiere es mit `zef`:

```
zef install fez
```

## Eine Distribution starten

Anstatt eine `META6.json` und die Verzeichnisse `lib/` und `t/` von Hand zusammenzustellen, kannst du `fez` das Grundgerüst erstellen lassen:

```
fez init My::Greeting
```

`fez init` initialisiert eine neue Distribution zum Aufbauen — ein Projektverzeichnis mit einer fertigen `META6.json` und dem Standardlayout bereits vorhanden — sodass du direkt mit dem Schreiben von Code unter `lib/` und Tests unter `t/` beginnen kannst, anstatt die Metadaten-Datei selbst vorzubereiten.

## Registrieren und Anmelden

Zum Veröffentlichen wird ein Ökosystem-Konto benötigt. Du erstellst eines einmalig mit `fez register` (es fragt nach Benutzername, E-Mail und Passwort) und meldest dich mit `fez login` an, das deinen Schlüssel speichert, damit spätere Befehle authentifiziert sind:

```
fez register
fez login
```

Dein Benutzername ist wichtig: Die `META6.json` einer Distribution muss ein `auth`-Feld enthalten, das auf `zef:<benutzername>` gesetzt ist — so weiß das Ökosystem, dass der Upload wirklich von dir stammt.

## Hochladen

Wenn das Konto eingerichtet und die Distribution fertig ist, verpackt `fez upload` das aktuelle Verzeichnis und reicht es ein:

```
fez upload
```

Danach kann sie jeder mit `zef install My::Greeting` über den Namen installieren. Jede Version kann nur einmal hochgeladen werden, also denke daran, die `version` in `META6.json` zu erhöhen, bevor du ein Update veröffentlichst.

## Weitere nützliche Befehle

Ein paar weitere `fez`-Befehle, die du brauchen wirst:

* `fez review` — überprüfe eine Distribution auf wahrscheinliche Probleme vor dem Hochladen;
* `fez list` — zeige die Distributionen an, die du bereits veröffentlicht hast;
* `fez refresh` — erstelle `META6.json` aus den aktuell vorhandenen Dateien neu.

> All diese Befehle erfordern eine installierte Version von `fez` und Netzwerkzugang, und alles nach `init` erfordert ein Ökosystem-Konto.

{% include nav.html %}
