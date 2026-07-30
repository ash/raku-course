---
title: Oefening ’Geef een variabele aan een kind door‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Maak een bestand `notes.txt` en schrijf er een paar regels in. Zet de naam ervan in een omgevingsvariabele `NOTES`. Gebruik daarna `shell` om `wc -l` te draaien, waarbij de bestandsnaam uit `$NOTES` gelezen wordt, zodat het kind de regels telt en het aantal afdrukt. Verwijder het bestand ten slotte vanuit Raku — met `unlink`, niet via de shell.

## Voorbeeld

Het programma drukt af:

```
3
```

(en laat geen `notes.txt` achter.)

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
