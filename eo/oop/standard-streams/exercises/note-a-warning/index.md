---
title: 'Averto per `note`'
translations_gpt:
---

{% include menu.html %}

## Problemo

Programo prilaboras valoron, kiu montriĝas negativa. Uzu `note` por sendi averton al norma erarfluo, kiam la valoro estas sub nulo, kaj `say` por sendi la veran rezulton — ĝian absolutan valoron — al norma eligo. Uzu la valoron `-3`.

## Ekzemplo

Ambaŭ linioj aperas sur la ekrano:

```
Warning: the value is negative
3
```

Se norma erarfluo estas forĵetita, nur la rezulto restas:

```
$ raku note-a-warning.raku 2>/dev/null
3
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
