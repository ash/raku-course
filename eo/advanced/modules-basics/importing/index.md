---
title: Importado
---

{% include menu.html %}

Estas pli ol unu maniero alporti modulon en programon. La tri deklaroj `use`, `need` kaj `require` diferencas laŭ tio, _kiam_ la modulo estas ŝargata kaj _kion_ ĝi disponebligos.

## `use`

Vi jam renkontis `use`. Ĝi ŝargas la modulon je kompiltempo kaj importas ĝiajn eksportitajn nomojn, do ili estas vokitaj rekte:

```raku
use Greeting;
say hello('Anna'); # Hello, Anna!
```

## `need`

`need` ankaŭ ŝargas la modulon je kompiltempo, sed ĝi _ne_ importas la eksportitajn nomojn. Vi ankoraŭ atingas la `our`-variablojn de la modulo per la nomo de la modulo:

```raku
need Greeting;
say $Greeting::version; # 1.0
```

Post `need Greeting`, nuda `hello(...)` ne estus rekonata, ĉar nenio estis importita — nur la kvalifikitaj nomoj, kiel `$Greeting::version`, estas disponeblaj.

## `require`

`require` ŝargas la modulon je _rultempo_ anstataŭ je kompiltempo. Tio utilas, kiam vi ne scias ĝis la rulado de la programo, ĉu modulo estos bezonata, ekzemple kiam ĝia nomo estas decidata per uzanta enigo.

Ĉar la ŝargado okazas je rultempo, nenio estas importita aŭtomate. Listigi la simbolojn, kiujn vi volas, en angulaj krampoj post la nomo alportas ilin, do ili povas esti vokitaj rekte:

```raku
require Greeting <&hello>;
say hello('Anna'); # Hello, Anna!
```

Por ĉiutaga uzo, `use` estas tio, kion vi volas; `need` kaj `require` estas tie por la malpli oftaj kazoj.

{% include nav.html %}
