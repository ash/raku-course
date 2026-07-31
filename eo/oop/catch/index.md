---
title: 'La fazero `CATCH`'
translations_gpt:
---

{% include menu.html %}

La bloko `try` estas oportuna, sed ĝi traktas la tutan blokon kiel unu unuon: aŭ ĝi funkcias aŭ ne. La fazero `CATCH` donas al vi pli delikatan regadon — ĝi permesas al vi trakti escepton _ene_ de la bloko, kie ĝi okazis, kaj decidi, kion fari.

`CATCH` estas fazero, kiel tiuj, kiujn vi renkontis en la [sekcio pri regofluo](/eo/advanced/phasers). Vi skribas ĝin ie ajn ene de bloko; ĝi ruliĝas nur, se escepto estas ĵetata tie. La escepto disponeblas kiel la temo `$_`:

```raku
{
    die 'Boom!';

    CATCH {
        default {
            say 'Caught: ' ~ .message;
        }
    }
}

say 'after';
```

La programo presas:

```
Caught: Boom!
after
```

La bloko `default` ene de `CATCH` traktas ĉiun escepton. Post kiam ĝi ruliĝis, la escepto estas konsiderata traktita, do la programo ne haltas — la ekzekuto daŭras post la ĉirkaŭa bloko, kial `after` estas presata.

Sen la `CATCH`, la `die` estus fininta la programon antaŭ ol `after` povus esti atingita.

{% include nav.html %}
