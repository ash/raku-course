---
title: Kio estas Cro
translations_gpt:
---

{% include menu.html %}

Cro estas aro da bibliotekoj por konstrui **servojn** — programojn, kiuj parolas kun aliaj programoj tra la reto. Ĝi estas plej konata pro HTTP, sed ĝi traktas ankaŭ WebSocket, kaj ĝi konstruas ĉion sur la reaktivaj iloj el pli frue en ĉi tiu parto: [supply](/eo/paradigms/supplies), `react` kaj `whenever`. Cro-traktilo de petoj estas, en sia kerno, reago al fluo da envenantaj petoj. Ĝia hejmpaĝo, kun la plena dokumentaro kaj ekzemploj, estas [cro.services](https://cro.services).

Kion Cro donas al vi super krudaj kontaktskatoloj:

* **Direktado** — mapu URL-vojojn al la kodo, kiu traktas ilin, anstataŭ analizi petojn mane.
* **Objektoj de peto kaj respondo** — legu informpetajn parametrojn kaj sendu JSON sen kunmeti tekston.
* **Samtempeco** — multaj klientoj estas servataj samtempe, sur la fadenaro, aŭtomate.
* **Kunmetebleco** — servoj estas konstruitaj el malgrandaj pecoj, kiujn vi povas testi kaj kombini.

Vi instalas ĝin el la ekosistemo:

```
zef install cro
```

Cro estas granda framo kun multaj dependaĵoj, do tio daŭras kelkajn minutojn. Se la instalado haltas ĉe dependaĵa identeco, kiun ĝi ne povas trovi — eraro menciante ion kiel `JSON::Fast:ver<0.19+>:auth<cpan:TIMOTIMO>` — via ekzemplero de `zef` estas tro malnova por koni la arkivon, kiu servas tiajn historiajn modulajn identecojn. Ĝisdatigu la instalilon mem per `zef install zef`, malfermu freŝan terminalon kaj plenumu la instaladon de Cro denove.

Cro kunigas la tutan kurson: objektorientitan dezajnon por siaj tipoj, la funkcian stilon en siaj trakteroj kaj la reaktivan modelon por siaj fluoj da petoj. La sekva temo montras la plej malgrandan eblan Cro-servon, por ke vi vidu, kiel tiuj ideoj kuniĝas en vera reta kodo.

{% include nav.html %}
