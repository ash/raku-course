---
title: Threads
translations_gpt:
---

{% include menu.html %}

Ein _Thread_ ist ein eigenständiger Ausführungsstrang, der neben dem Rest Ihres Programms läuft. Einen Thread zu starten lässt ein Stück Arbeit im Hintergrund geschehen, während das Hauptprogramm weiterläuft.

Threads sind das Werkzeug für Nebenläufigkeit auf der untersten Ebene in Raku. Im Alltag greifen Sie meist zu den übergeordneten [_Promises_](/de/paradigms/promises) des nächsten Abschnitts, die auf Threads aufbauen, sich aber weit leichter verbinden lassen. Dennoch lohnt es sich, den grundlegenden Mechanismus zu sehen: wie man einen Thread startet und wie man auf ihn wartet.

{% include nav.html %}
