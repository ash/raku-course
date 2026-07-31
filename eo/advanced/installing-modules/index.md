---
title: Instali modulojn el la reto
translations_gpt:
---

{% include menu.html %}

Krom la moduloj, kiujn vi mem skribas, ekzistas granda kolekto de moduloj publikigitaj de la Raku-komunumo. Ili kovras ĉion de retkadroj ĝis datumformatoj, kaj vi povas instali ilin kaj uzi ilin en viaj propraj programoj.

## La instalilo `zef`

Moduloj estas instalataj per `zef`, la norma modula administrilo, kiu estas inkluzivita kun Rakudo. Por instali modulon, donu al `zef` la nomon de la modulo:

```console
$ zef install JSON::Fast
```

`zef` elŝutas la modulon kune kun ĉio, de kio ĝi dependas, rulas ĝiajn testojn kaj instalas ĝin. Post instalado, modulo troviĝas aŭtomate en la serĉvojo, do programo povas ŝargi ĝin per simpla `use` — neniu opcio `-I` estas bezonata:

```raku
use JSON::Fast;
```

Vi ankaŭ povas serĉi en la ekosistemo kaj ĝisdatigi aŭ forigi modulojn:

```console
$ zef search Test
$ zef uninstall JSON::Fast
```

## De kie venas moduloj

Publikigitaj moduloj loĝas en la Raku-_ekosistemo_. Vi povas trarigardi ĝin sur la retejo [raku.land](https://raku.land), kiu listigas la disponeblajn distribuaĵojn kaj ilian dokumentadon.

## `META6.json`

Distribuaĵo destinita por kunhavigo inkluzivas priskribdosieron nomitan `META6.json`. Ĝi registras la nomon de la distribuaĵo, la version, la modulojn, kiujn ĝi provizas, kaj la aliajn distribuaĵojn, de kiuj ĝi dependas. `zef` legas ĉi tiun dosieron por scii, kion instali kaj kiel la partoj kunfitas. Kiam vi publikigas vian propran modulon, provizado de ĝusta `META6.json` estas tio, kio igas ĝin instalebla de ĉiuj aliaj.

{% include nav.html %}
