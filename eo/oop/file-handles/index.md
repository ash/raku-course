---
title: Dosierteniloj
translations_gpt:
---

{% include menu.html %}

Legi aŭ skribi tutan dosieron samtempe estas oportune, sed foje vi volas trairi dosieron linio post linio, aŭ teni dosieron malfermita dum vi skribas al ĝi ripete. Por tio vi uzas _dosiertenilon_.

La plej simpla maniero legi dosieron linio post linio eĉ ne bezonas eksplicitan tenilon: la metodo `lines` sur vojobjekto donas la liniojn unu post la alia, pretajn por buklo `for`:

```raku
spurt 'words.txt', "one\ntwo\nthree\n";

for 'words.txt'.IO.lines -> $line {
    say $line.uc;
}
```

Ĉiu `$line` estas unu linio, sen sia fina linifino. La programo presas:

```
ONE
TWO
THREE
```

Por skribi al dosiero tra tenilo, malfermu ĝin per `open` kaj la flago `:w` (skribi), uzu la metodojn `say` aŭ `print` de la tenilo, kaj `close` ĝin, kiam vi finis:

```raku
my $fh = open 'out.txt', :w;
$fh.say('first line');
$fh.say('second line');
$fh.close;
```

Fermi la tenilon certigas, ke ĉio, kion vi skribis, estas elŝovita al disko. Legi linion post linio, kiel supre, estas la kutima maniero trakti dosierojn, kiuj estas tro grandaj por engluti en memoron samtempe.

{% include nav.html %}
