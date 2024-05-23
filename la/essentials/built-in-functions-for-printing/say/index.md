---
title: Dicere consuetudo
---

{% include menu.html %}

Consuetudo `dicere` in-aedificata haec facit:

1. Vocavit methodum `gist` in argumentis suis.
1. Addit novam lineam characterem.
1. Convertit eventum ad UTF-8.
1. Mittit ad `STDOUT` rivum.

Ex prospectu usoris, `dicere` simpliciter imprimit contenta variabilis ad terminalem et addit novam lineam.

Primus gradus aliquas explicationes requirit. Methodus `gist` est methodus quae definitur pro omni in-aedificato genere datae, ut integri vel chordae. Pro talibus generibus simplicibus, eventus reditus est valor humaniter legibilis qui item repraesentat.

```raku
dicere 42; # 42
dicere 'Raku'; # Raku
```

Pro data complexiora, ut ordines vel tabulae, methodus `gist` addit aliquam formam.

```raku
meus @data = 'alpha', 'beta', 'gamma';
dicere @data; # [alpha beta gamma]

meus %data = alpha => 1, beta => 2, gamma => 3;
dicere %data; # {alpha => 1, beta => 2, gamma => 3}
```

Consuetudo `dicere` potest vocari tam ut functio quam ut methodus:

```raku
dicere 42;
dicere(42);
42.dicere;
```

Potes plus quam unum argumentum praebere ad `dicere`. Eventus partes iunguntur sine spatiis inter eas.

```raku
dicere(100, 500); # 100500
```

{% include nav.html %}