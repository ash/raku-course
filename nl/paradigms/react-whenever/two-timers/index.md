---
title: Twee timers
translations_gpt:
---

{% include menu.html %}

Elk react-voorbeeld tot nu toe gebruikte `Supply.from-list`, die al zijn waarden meteen bij het aftappen naar buiten duwt. Daarom werd elke stroom volledig afgedrukt voordat de volgende begon — er kwam geen wachten aan te pas. Echte gebeurtenisstromen zijn zo niet: hun waarden komen in de loop van de **tijd** verspreid binnen, en een `react`-blok vlecht ze dooreen zodra ze komen.

Een timer is de eenvoudigste stroom die zich zo gedraagt. `Supply.interval($period)` zendt een oplopende teller uit — `0, 1, 2, …` — één keer per `$period` seconden. Draai er twee met verschillende snelheden in één `react`, en hun waarden vlechten zich dooreen:

```raku
react {
    whenever Supply.interval(0.3) {
        say "tick $_";
    }
    whenever Supply.interval(0.5, 0.25) {
        say "TOCK $_";
    }
    whenever Promise.in(1.4) {
        done;
    }
}
```

Een typische draaibeurt drukt af:

```
tick 0
TOCK 0
tick 1
tick 2
TOCK 1
tick 3
tick 4
TOCK 2
```

De snelle `tick` gaat elke `0.3` seconde af; de tragere `TOCK` elke `0.5`, beginnend na een kwart seconde (het tweede argument van `interval` is die aanvangsvertraging). Geen van beide wacht op de andere — het `react`-blok draait eenvoudigweg de `whenever`-body die bij de binnengekomen waarde hoort, dus **doorsnijden** de twee stromen elkaar in plaats van om beurten te gaan.

Omdat timers uit zichzelf nooit eindigen, biedt een derde `whenever` de uitgang: `Promise.in(1.4)` wordt na 1,4 seconde vervuld, en haar body roept `done` aan om het `react`-blok te beëindigen. Zonder dat zou de react eeuwig tikken en tokken.

De precieze dooreenvlechting hangt van de timing af, dus een latere draaibeurt kan de regels iets anders ordenen — maar dat is de aard van reageren op live gebeurtenissen: je reageert op elke gebeurtenis zodra ze gebeurt, wanneer ze ook gebeurt.

{% include nav.html %}
