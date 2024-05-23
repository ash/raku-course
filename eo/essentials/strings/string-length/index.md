---
title: String length in Raku
---

{% include menu.html %}

La Unikoda naturo de la ŝnuroj faras kelkajn trivialajn aferojn iom pli malfacilaj. Aŭ, almenaŭ, vi devas pensi pri ĝi kiel pri malpli rekta temo. Ekzemple, prenu la longecon de ŝnuro. Ĉu ĝi estas la nombro de karakteroj, aŭ ĉu ĝi estas la nombro de bajtoj? Aŭ kio se la sama karaktero estas malkomponita malsame en malsamaj ŝnuroj, ĉu ĝi ankoraŭ estas unu karaktero?

## Longeco en karakteroj

Por akiri la longecon de la ŝnuro en karakteroj, uzu la metodon `chars`:

```raku
my $str = '你好世界';
say $str.chars;
```

Dum ni parolos pri metodoj poste, ni jam devus povi uzi ilin. En Raku, vi povas voki metodojn sur preskaŭ ĉiu objekto, inkluzive de ŝnuroj kaj skalaj variabloj. Por voki metodon, uzu punkton. Do, ĉi tie ni vidas la metodon vokitan sur variablo, kiu konservas ŝnuron: `$str.chars`.

Estas kvar karakteroj en ĉi tiu ĉina saluto 你好世界. Kaj `$str.chars` redonas ĝuste `4`.

## Longeco en bajtoj

Nur por referenco, jen kiel vi akiras la longecon de la ŝnuro en bajtoj. En ĉi tiu kazo, gravas scii kiu kodado estas uzata por konservi la ŝnuron:

```raku
my $str = '你好世界';
say $str.encode('UTF-8').bytes;
```

Ĉi-foje, la programo presas `12`. Rimarku, ke ni havas du ĉenitajn metodvokojn en la dua linio ĉi tie.

## Longeco en kodpunktoj

Nur por kompletiĝo, jen alia utila metodo, kiu ankaŭ rilatas al ŝnurlongecoj: `codes`. Ĝi redonas la nombron de kodpunktoj en la ŝnuro post kiam ĝi estas normaligita. En multaj kazoj, `codes` kaj `chars` redonas la saman. Tamen, en iuj maloftaj kazoj, kiam, ekzemple, vi konstruis 'neeblan' karakteron, por kiu ne ekzistas unuopa kodpunkto en la tuta Unikoda spaco, la metodoj donas malsamajn rezultojn.

```raku
say 'x̨'.chars;
say 'x̨'.codes;
```

Ĉi tiu karaktero, `x̨`, ne havas dediĉitan kodpunkton kaj povas esti konstruita nur el la du partoj: la minuskla litero `x` kaj la kombina karaktero `0x0328`. Do, ankoraŭ estas unu karaktero sed du kodpunktoj. Do, la programo presas:

    1
    2

{% include nav.html %}