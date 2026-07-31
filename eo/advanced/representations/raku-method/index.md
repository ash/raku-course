---
title: 'La metodo `.raku`'
---

{% include menu.html %}

La tria reprezenta metodo, `.raku`, redonas ĉenon kun **kodosimila** reprezento de la valoro — ideale, ĉenon kiun vi povus enmeti reen en programon por rekrei la saman valoron. Ĉiu valoro en Raku havas ĝin.

```raku
say 42.raku;        # 42
say 'Raku'.raku;    # "Raku"
say (1, 2, 3).raku; # (1, 2, 3)
```

Rimarku kiel la ĉeno `'Raku'` revenas kun la citiloj ĉirkaŭ ĝi, por ke vi povu distingi nombron de ĉeno unuavide — ĝuste tia detalo estas utila dum sencimigo.

La metodo ankaŭ funkcias por kunmetitaj datumoj, inkluzive de nestitaj strukturoj:

```raku
my @data = 1, [2, 3], 4;
say @data.raku; # [1, [2, 3], 4]
```

Ĉar `.raku` redonas ordinaran ĉenon, vi povas uzi ĝin ĉie kie ĉeno estas atendata, ekzemple ene de interpolita mesaĝo:

```raku
my @data = 10, 20, 30;
say "The data is { @data.raku }";
# The data is [10, 20, 30]
```

Uzu `.raku` kiam ajn vi volas tiun kodosimilan reprezenton kiel ĉenon por kombini kun viaj propraj mesaĝoj. Tre baldaŭ ni prezentos `dd`, Rakudo-ilon kiu presas la saman specon de reprezento por vi en unu paŝo.

{% include nav.html %}
