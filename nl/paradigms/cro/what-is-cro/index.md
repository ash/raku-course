---
title: Wat is Cro
translations_gpt:
---

{% include menu.html %}

Cro is een verzameling bibliotheken om **services** te bouwen — programma's die over het netwerk met andere programma's praten. Het is vooral bekend om HTTP, maar het kan ook overweg met WebSockets, en het bouwt alles op de reactieve gereedschappen van eerder in dit deel: [supplies](/nl/paradigms/supplies), `react` en `whenever`. Een Cro-verzoekafhandelaar is in wezen een reactie op een stroom binnenkomende verzoeken. Zijn thuissite, met de volledige documentatie en voorbeelden, is [cro.services](https://cro.services).

Wat Cro je boven kale sockets geeft:

* **Routering** — koppel URL-paden aan de code die ze afhandelt, in plaats van verzoeken met de hand te ontleden.
* **Verzoek- en antwoordobjecten** — lees queryparameters en verstuur JSON zonder tekst in elkaar te zetten.
* **Concurrency** — veel clients worden tegelijk bediend, automatisch op de threadpool.
* **Samenstelbaarheid** — services worden gebouwd uit kleine stukken die je kunt testen en combineren.

Je installeert het vanuit het ecosysteem:

```
zef install cro
```

Cro is een groot framework met veel afhankelijkheden, dus dit duurt een paar minuten. Als de installatie strandt op een afhankelijkheidsidentiteit die het niet kan vinden — een fout die iets als `JSON::Fast:ver<0.19+>:auth<cpan:TIMOTIMO>` noemt — is jouw exemplaar van `zef` te oud om het archief te kennen dat zulke historische module-identiteiten bedient. Werk de installer zelf bij met `zef install zef`, open een verse terminal, en draai de installatie van Cro opnieuw.

Cro brengt de hele cursus samen: objectgeoriënteerd ontwerp voor zijn typen, de functionele stijl in zijn afhandelaars, en het reactieve model voor zijn stromen verzoeken. Het volgende onderwerp toont de kleinst mogelijke Cro-service zodat je kunt zien hoe die ideeën in echte webcode samenkomen.

{% include nav.html %}
