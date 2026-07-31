---
title: 'Fāzeris `CATCH`'
translations_gpt:
---

{% include menu.html %}

Bloks `try` ir ērts, taču tas visu bloku uztver kā vienu veselumu: vai nu tas nostrādā, vai ne. Fāzeris `CATCH` dod smalkāku vadību — tas ļauj izņēmumu apstrādāt _iekšpus_ tā bloka, kurā tas notika, un izlemt, ko darīt.

`CATCH` ir fāzeris, tāpat kā tie, ar kuriem iepazināties [sadaļā par vadības plūsmu](/lv/advanced/phasers). To rakstāt jebkur bloka iekšienē; tas izpildās tikai tad, ja tur tiek izmests izņēmums. Izņēmums ir pieejams kā tēma `$_`:

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

Programma izdrukā:

```
Caught: Boom!
after
```

Bloks `default` `CATCH` iekšienē apstrādā jebkuru izņēmumu. Kad tas ir izpildījies, izņēmums tiek uzskatīts par apstrādātu, tāpēc programma neapstājas — izpilde turpinās aiz apņemošā bloka, un tieši tāpēc tiek izdrukāts `after`.

Bez `CATCH` `die` būtu beidzis programmu, pirms `after` varētu tikt sasniegts.

{% include nav.html %}
