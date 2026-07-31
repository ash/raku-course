---
title: Objektu introspekcija
translations_gpt:
---

{% include menu.html %}

[Sadaļā par konteineriem](/lv/advanced/containers) jūs izmantojāt `.^name`, lai vērtībai pajautātu tās tipu. Tie paši `.^` metaizsaukumi ļauj izpētīt klasi un tās objektus: to nosaukumus, atribūtus un vietu hierarhijā.

Metametode `.^name` atgriež klases nosaukumu:

```raku
class Dog {
    has Str $.name;
    method bark { 'Woof' }
}

say Dog.^name; # Dog
```

Metametode `.^attributes` uzskaita klases atribūtus. Katrs tiek parādīts ar savu tipu un iekšējo privāto nosaukumu (`$!` formu, ar ko iepazināties pie [privātiem atribūtiem](/lv/oop/methods/private-attributes)):

```raku
say Dog.^attributes; # (Str $!name)
```

Introspekcija noder rīkiem, kas ar objektiem strādā vispārīgi, — piemēram, lai izdrukātu katru objekta atribūtu, iepriekš nezinot tā klasi. Nākamais temats aplūko, kā apskatīt klases mantošanas ķēdi.

{% include nav.html %}
