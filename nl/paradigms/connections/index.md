---
title: Verbindingen op afstand maken
translations_gpt:
---

{% include menu.html %}

Het laatste onderdeel van de cursus wendt zich tot _web_-programmeren — praten met andere machines over het netwerk. We bouwen van onderaf op: een kale netwerkverbinding, dan een eenvoudige HTTP-client, een eenvoudige HTTP-server, en ten slotte een blik op het Cro-framework.

Anders dan de rest van de cursus hebben deze voorbeelden een **netwerkverbinding** nodig om te draaien, en de latere hebben modules nodig die je zelf installeert. De code is zo geschreven dat ze compileert en werkt wanneer je haar tegen een echte server draait, maar de uitvoer kan niet getoond worden zoals bij de offline voorbeelden. Elke pagina vermeldt wat ze nodig heeft.

We beginnen bij het fundament van alle netwerkcode: een _socket_, de tweewegbuis tussen twee programma's over een netwerk.

{% include nav.html %}
