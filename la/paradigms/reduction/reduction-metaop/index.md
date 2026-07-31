---
title: Metaoperator reductionis
translations_gpt:
---

{% include menu.html %}

Involve quemlibet operatorem infixum uncis quadratis et _reductio_ fit: inter omnia indicis elementa inseritur, indicem in unum valorem contrahens.

```raku
say [+] 1, 2, 3, 4, 5; # 15
say [*] 1, 2, 3, 4, 5; # 120
```

`[+]` indicem summat ac si `1 + 2 + 3 + 4 + 5` scripsisses; `[*]` illum multiplicat. Idem cum quolibet operatore infixo operatur:

```raku
say [max] 4, 9, 2, 7; # 9
say [min] 4, 9, 2, 7; # 2
say [~] 'a', 'b', 'c'; # abc
```

`[max]` operatore `max` reducit ut elementum maximum inveniat, et `[~]` operatore concatenationis catenarum `~` reducit ut partes simul glutinet.

Metaoperator reductionis in quolibet indice operatur, etiam in intervallo:

```raku
say [+] 1..100; # 5050
```

Est una ex facultatibus Raku compendiosissimis et expressivissimis: totius anuli accumulatio in uno uncorum pari.

{% include nav.html %}
