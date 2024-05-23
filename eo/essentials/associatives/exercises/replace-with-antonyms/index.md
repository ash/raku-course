---
title: 'Ekzerco: Anstataŭigu per antonimoj'
---

{% include menu.html %}

## Problemo

Kreu programon kiu anstataŭigas ĉiujn vortojn el la komanda linio per iliaj antonimoj. Se la vorto mankas en la vortaro, ne modifu ĝin kaj presu kiel estas.

Uzu malmolan koditan hash por konservi la vortaron de antonimoj. Por via komforto, jen estas preta listo de ĉirkaŭ 200 paroj kiujn vi povas rekte kopii kaj alglui en vian programon: [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku). Ĉiuj paroj estas konservitaj en ambaŭ direktoj, ekz.:

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    # . . .
    'below' => 'above',
    # . . .
    'present' => 'absent',
    # . . .
;
```

Farigu la programon kiel eble plej simpla kaj presu la vortojn linio post linio.

## Ekzemplo

Rulu la programon kaj pasigu kelkajn vortojn al ĝi. Certigu ke almenaŭ kelkaj el la vortoj povas esti trovitaj en la vortaro.

```console
$ raku replace-with-antonyms.raku a quiet teacher wants to buy some salt
a
noisy
student
wants
to
sell
some
sugar
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}