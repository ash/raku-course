---
title: Modulos ex interrete installare
translations_gpt:
---

{% include menu.html %}

Praeter modulos quos ipse scribis, magna collectio modulorum a communitate Raku editorum exstat. Omnia complectuntur a compagibus interretialibus usque ad formas datorum, et eos installare atque in tuis programmatis uti potes.

## Instrumentum `zef`

Moduli per `zef` installantur, quod est instrumentum moderandi modulos normatum, quod una cum Rakudo distribuitur. Ad modulum installandum, nomen moduli `zef` praebe:

```console
$ zef install JSON::Fast
```

`zef` modulum una cum omnibus eius dependentiis deponit, probationes eius exsequitur, et eum installat. Modulo installato, is automatice in via inquisitionis est, ita ut programma eum simplici `use` instructione onerare possit — optio `-I` non necessaria est:

```raku
use JSON::Fast;
```

Potes etiam oecosystema perscrutari et modulos renovare vel removere:

```console
$ zef search Test
$ zef uninstall JSON::Fast
```

## Unde moduli proveniant

Moduli editi in _oecosystemate_ Raku habitant. Id in situ interretiali [raku.land](https://raku.land) perlustrare potes, ubi distributiones praesto et earum documentatio enumerantur.

## `META6.json`

Distributio quae communicanda est fasciculum descriptionis nomine `META6.json` includit. Hic nomen distributionis, versionem, modulos quos praebet, et alias distributiones a quibus pendet memorat. `zef` hunc fasciculum legit ut sciat quid installandum sit et quomodo partes inter se cohaereant. Cum modulum tuum proprium edis, fasciculum `META6.json` recte praebere id est quod efficit ut ab omnibus aliis installari possit.

{% include nav.html %}
