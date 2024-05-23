---
title: La rutino "say"
---

{% include menu.html %}

La enkonstruita rutino `say` faras la jenajn agojn:

1. Vokas la metodon `gist` sur siaj argumentoj.
1. Aldonas novlinian karakteron.
1. Konvertas la rezulton al UTF-8.
1. Sendas ĝin al la fluo `STDOUT`.

El la perspektivo de la uzanto, `say` simple presas la enhavon de variablo al la terminalo kaj aldonas la novlinion.

La unua paŝo postulas iom da klarigo. La metodo `gist` estas metodo kiu estas difinita por ĉiu enkonstruita datentipo, kiel ekzemple entjeroj aŭ ĉenoj. Por tiaj simplaj tipoj, la revena rezulto estas homlegebla valoro kiu reprezentas la objekton.

```raku
say 42; # 42
say 'Raku'; # Raku
```

Por pli kompleksaj datumoj, kiel ekzemple vektoroj aŭ asociaj tabeloj, la metodo `gist` aldonas iom da formatado.

```raku
my @data = 'alpha', 'beta', 'gamma';
say @data; # [alpha beta gamma]

my %data = alpha => 1, beta => 2, gamma => 3;
say %data; # {alpha => 1, beta => 2, gamma => 3}
```

La rutino `say` povas esti vokita kiel funkcio aŭ metodo:

```raku
say 42;
say(42);
42.say;
```

Vi povas pasi pli ol unu argumenton al `say`. La eliraj partoj estas kunigitaj sen spacoj inter ili.

```raku
say(100, 500); # 100500
```

{% include nav.html %}