---
title: Il metaoperatore di riduzione
translations_gpt:
---

{% include menu.html %}

Avvolgi un qualunque operatore infisso fra parentesi quadre e diventa una _riduzione_: viene inserito fra ogni elemento di un elenco, facendolo collassare in un unico valore.

```raku
say [+] 1, 2, 3, 4, 5; # 15
say [*] 1, 2, 3, 4, 5; # 120
```

`[+]` somma l'elenco come se avessi scritto `1 + 2 + 3 + 4 + 5`; `[*]` lo moltiplica. Lo stesso vale con qualunque operatore infisso:

```raku
say [max] 4, 9, 2, 7; # 9
say [min] 4, 9, 2, 7; # 2
say [~] 'a', 'b', 'c'; # abc
```

`[max]` riduce con l'operatore `max` per trovare l'elemento più grande, e `[~]` riduce con l'operatore di concatenazione `~` per incollare insieme i pezzi.

Il metaoperatore di riduzione funziona su qualunque elenco, intervalli compresi:

```raku
say [+] 1..100; # 5050
```

È una delle funzionalità più compatte ed espressive di Raku: un intero ciclo di accumulazione in un paio di parentesi.

{% include nav.html %}
