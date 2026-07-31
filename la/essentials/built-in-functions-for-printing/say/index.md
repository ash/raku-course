---
title: '`say`'
---

{% include menu.html %}

Consuetudo `say` in-aedificata haec facit:

1. Vocavit methodum `gist` in argumentis suis.
1. Addit novam lineam characterem.
1. Convertit eventum ad UTF-8.
1. Mittit ad `STDOUT` rivum.

Ex prospectu usoris, `say` simpliciter imprimit contenta variabilis ad terminalem et addit novam lineam.

Primus gradus aliquas explicationes requirit. Methodus `gist` est methodus quae definitur pro omni in-aedificato genere datae, ut integri vel chordae. Pro talibus generibus simplicibus, eventus reditus est valor humaniter legibilis qui item repraesentat.

```raku
say 42; # 42
say 'Raku'; # Raku
```

Pro data complexiora, ut ordines vel tabulae, methodus `gist` addit aliquam formam.

```raku
my @data = 'alpha', 'beta', 'gamma';
say @data; # [alpha beta gamma]

my %data = alpha => 1, beta => 2, gamma => 3;
say %data; # {alpha => 1, beta => 2, gamma => 3}
```

Consuetudo `say` potest vocari tam ut functio quam ut methodus:

```raku
say 42;
say(42);
42.say;
```

Potes plus quam unum argumentum praebere ad `say`. Eventus partes iunguntur sine spatiis inter eas.

```raku
say(100, 500); # 100500
```

{% include nav.html %}