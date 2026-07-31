---
title: Publikigi per fez
translations_gpt:
---

{% include menu.html %}

La antaŭa temo enkondukis `fez` kiel manieron alŝuti distribuon al la Raku-ekosistemo. Vi ne devas uzi `fez` — ĝi ne estas la sola maniero publikigi — sed ĝi estas la plej ofta elekto, kaj ĝi faras pli ol alŝuti: ĝi ankaŭ povas starigi novan distribuon por vi kaj administri vian aŭtoran konton. Instalu ĝin per `zef`:

```
zef install fez
```

## Komenci distribuon

Anstataŭ kunmeti `META6.json` kaj la dosierujojn `lib/` kaj `t/` mane, vi povas lasi `fez` skafaldi ilin:

```
fez init My::Greeting
```

`fez init` pravalorizas novan distribuon por konstrui sur ĝi — projektan dosierujon kun preta `META6.json` kaj la norma aranĝo jam en loko — do vi povas iri rekte al skribado de kodo sub `lib/` kaj testoj sub `t/` anstataŭ prepari la metadatuman dosieron mem.

## Registriĝi kaj ensaluti

Publikigado bezonas ekosisteman konton. Vi kreas ĝin unufoje per `fez register` (ĝi petas uzantnomon, retpoŝton kaj pasvorton) kaj ensalutas per `fez login`, kiu konservas vian ŝlosilon, tiel ke postaj komandoj estas aŭtentigitaj:

```
fez register
fez login
```

Via uzantnomo gravas: la `META6.json` de distribuo devas porti kampon `auth` metitan al `zef:<username>`, kio estas la maniero, kiel la ekosistemo scias, ke la alŝuto vere estas via.

## Alŝuti

Kun la konto en loko kaj la distribuo preta, `fez upload` pakas la nunan dosierujon kaj submetas ĝin:

```
fez upload
```

Post tio, iu ajn povas instali ĝin laŭ nomo per `zef install My::Greeting`. Ĉiu versio povas esti alŝutita nur unufoje, do memoru levi la `version` en `META6.json` antaŭ ol publikigi ĝisdatigon.

## Aliaj oportunaj komandoj

Kelkaj pliaj komandoj de `fez`, kiujn vi atingos:

* `fez review` — kontroli distribuon pri verŝajnaj problemoj antaŭ alŝutado;
* `fez list` — montri la distribuojn, kiujn vi jam publikigis;
* `fez refresh` — rekonstrui `META6.json` el la dosieroj nune sur disko.

> Ĉiuj ĉi bezonas `fez` instalitan kaj retan aliron, kaj ĉio post `init` bezonas ekosisteman konton.

{% include nav.html %}
