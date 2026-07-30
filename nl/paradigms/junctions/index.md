---
title: Juncties
translations_gpt:
---

{% include menu.html %}

Dit onderdeel wendt zich tot _concurrent_ programmeren — meer dan één ding tegelijk doen. Raku heeft daar een rijke, vriendelijke gereedschapskist voor: juncties, threads, promises en kanalen. We beginnen met de zachtaardigste ervan, de _junctie_.

Een junctie is één enkele waarde die **meerdere** waarden tegelijk bevat, verbonden door een logische verhouding: _elke_ ervan, _alle_ ervan, _één_ ervan, of _geen_ ervan. Wanneer je een junctie in een vergelijking gebruikt, test Raku elke waarde erachter en combineert het de resultaten. Dat vervangt vaak een hele lus door één enkele uitdrukking — en onder de motorkap kunnen de tests parallel draaien.

In de begindagen van de taal gingen juncties onder een andere naam door: _kwantumsuperposities_ — een knipoog naar de manier waarop één waarde vele mogelijkheden tegelijk kan bevatten, net als een deeltje in de kwantumfysica.

{% include nav.html %}
