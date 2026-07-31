---
title: Duo horologia
translations_gpt:
---

{% include menu.html %}

Omne exemplum react hactenus `Supply.from-list` adhibuit, quod omnes valores suos illo momento quo coniungitur trudit. Quapropter unusquisque fluxus plene impressus est antequam sequens incipiebat — nulla exspectatio implicata erat. Fluxus eventuum veri tales non sunt: valores eorum per **tempus** diffusi adveniunt, et blocus `react` eos dum veniunt intertexit.

Horologium est fluxus simplicissimus qui ita se gerit. `Supply.interval($period)` calculum crescentem emittit — `0, 1, 2, …` — semel per `$period` secunda. Curre duo eorum diversis celeritatibus intra unum `react`, et valores eorum inter se texuntur:

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

Cursus typicus imprimit:

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

Celer `tick` omni `0.3` secundo emicat; tardior `TOCK` omni `0.5`, quadrante secundi post incipiens (secundum argumentum ipsius `interval` illa mora initialis est). Neutrum alterum exspectat — blocus `react` mere illud corpus `whenever` currit quod ad valorem qui advenit pertinet, itaque duo fluxus **inter se secant** potius quam per vices agunt.

Quia horologia numquam sponte finiunt, tertium `whenever` exitum praebet: `Promise.in(1.4)` post 1.4 secunda servatur, et corpus eius `done` vocat ut blocum `react` finiat. Sine eo, react in aeternum tick et tock ageret.

Exacta intertextura ex temporibus pendet, itaque cursus posterior lineas paulo aliter ordinare potest — sed haec natura eventibus vivis respondendi est: unicuique respondes dum accidit, quandocumque accidit.

{% include nav.html %}
