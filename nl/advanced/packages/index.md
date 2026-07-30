---
title: Pakketten en naamruimten
translations_gpt:
---

{% include menu.html %}

Een _naamruimte_ (namespace) is een benoemde container voor andere benoemde zaken, zoals variabelen en subroutines. Het voorkomt dat namen met elkaar botsen: `Maths::pi` en `Physics::pi` kunnen allebei bestaan zonder conflicten. Een _pakket_ (package) is het meest basale type naamruimte.

Je hebt al een naamruimte gebruikt zonder er een naam aan te geven: elke `module` maakt er een aan. Dit gedeelte kijkt direct naar pakketten, en naar hoe `our`-variabelen en het `::`-scheidingsteken je in staat stellen om van buitenaf een naamruimte te benaderen.

{% include nav.html %}
