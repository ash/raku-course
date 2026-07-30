---
title: An eine Datei anhängen
translations_gpt:
---

{% include menu.html %}

Standardmäßig ersetzt `spurt` alles, was in der Datei stand. Um stattdessen an das Ende einer bestehenden Datei anzuhängen, übergeben Sie das benannte Argument `:append`:

```raku
spurt 'log.txt', "line1\n";
spurt 'log.txt', "line2\n", :append;

print slurp 'log.txt';
```

Das zweite `spurt` behält den bestehenden Inhalt und setzt die neue Zeile dahinter, die Datei enthält am Ende also beide Zeilen:

```
line1
line2
```

Ohne `:append` hätte der zweite Aufruf die Datei überschrieben, und nur `line2` wäre übrig geblieben. Anhängen ist nützlich für Dinge wie Protokolldateien, bei denen jeder Programmlauf zu einem wachsenden Verlauf beiträgt, statt von vorn zu beginnen.

{% include nav.html %}
