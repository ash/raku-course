---
title: Dupunkta map
translations_gpt:
---

{% include menu.html %}

## Problemo

Jen esprimo kiu duobligas la nombrojn de `1` ghis `10` kaj poste konservas nur tiujn pli grandajn ol `10`:

```raku
(1..10).map(* * 2).grep(* > 10).say;
```

Reskribu ghin tiel ke la metoda voko `grep` uzas la dupunktan formon anstatau krampojn. Lasu la reston de la cheno neshanghita. Memoru ke la dupunkta formo konsumas la reston de la deklaro, do nur la lasta voko en cheno rajtas uzi ghin.

## Ekzemplo

La programo presas:

```
(12 14 16 18 20)
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
