---
title: Arrays
---

{% include menu.html %}

Arrays estas agregitaj datumtipoj, kiuj povas enhavi pli ol unu valoron. Tio diferencigas arrays de [skalaj elementoj](/eo/essentials/scalar-variables). Array-elementoj povas esti indeksitaj (aŭ _subskribitaj_). Alivorte, ĝiaj elementoj havas pozicion (kio klarigas la ĝeneralan nomon por ĉi tiu speco de datumoj: poziciaj).

Array-variabloj uzas alian specon de sigelo: `@`. La reguloj por la variablonomo estas la samaj kiel [por skaloj](/eo/essentials/scalar-variables/identifiers/).

```raku
my @urboj;
```

Ĝis nun, la array nomata `@urboj` estis kreita. Vi povas plenigi ĝin per kelkaj valoroj:

```raku
@urboj = 'Parizo', 'Romo', 'Berlino';
```

Alternative, eblas tuj inicializi la valorojn:

```raku
my @urboj = 'Parizo', 'Romo', 'Berlino';
```

## Indeksado

Por aliri unuopan elementon de array, uzu paron de krampoj, kiujn vi metas post la nomo de la variablo:

```raku
diru @urboj[1];
```

Notu, ke la sigelo ĉiam restas la sama. Ĉar elementoj estas nombritaj ekde nulo, la elemento `@urboj[1]` estas `'Romo'` en nia ekzemplo.

Arrays estas ŝanĝeblaj, do vi povas facile modifi iliajn elementojn simple asignante novan valoron al ili:

```raku
@urboj[0] = 'Romo';
@urboj[1] = 'Parizo';
```

Post tio, la deklaro `diru @urboj[1]` presos la novan valoron `'Parizo'`.

## Grandeco

Por akiri la aktualan longecon de array, aŭ, alivorte, la nombron de ĝiaj elementoj, uzu la metodon `elems`:

```raku
diru @urboj.elems; # 3
```

Se la array aperas en kunteksto, kie la atendata parametro estas nombro, la revena valoro estas la grandeco de la array:

```raku
diru +@urboj; # 3
```

Ĉi tie, la [`+` prefiksa operaciilo](/eo/essentials/coercion/prefixes) postulas numeran valoron de sia argumento, do la rezulto de `+@urboj` estas `3`.

{% include nav.html %}