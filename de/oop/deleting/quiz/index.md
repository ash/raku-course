---
title: 'Quiz — Dateien löschen'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
mkdir 'data';
spurt 'data/x.txt', 'hi';
rmdir 'data';
say 'data'.IO.e;
```

{:.quiz}
1 | True
0 | False
0 | ein Fehler
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`rmdir` entfernt nur ein **leeres** Verzeichnis. Hier enthält `data` noch `x.txt`, `rmdir` entfernt also nichts und lässt das Verzeichnis stehen. `.e` meldet daher weiterhin `True`. Um das Verzeichnis zu löschen, würden Sie zuerst seinen Inhalt entfernen (etwa mit `.unlink for 'data'.IO.dir`) und dann `rmdir` aufrufen.

</div>

{% include nav.html %}
