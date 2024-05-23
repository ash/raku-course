---
title: Kviz — Interpolado de tabeloj
---

{% include menu.html %}

Donita la sekva tabelo:

```raku
my @arr = 10, 9, 8, 3, 2, 1;
```

Kompletigu la subajn programojn por akiri la petitan eliron.

## 1

Presu la trian elementon (la ero kun indekso `2`).

{:.quiz-code}
[2] | say &quot;La tria elemento estas @arr␣␣&quot;;

## 2

Presu ĉiujn elementojn (sen eksplicite indeksi ĉiujn).

{:.quiz-code}
arr[] | say &quot;Ĉi tiu tabelo enhavas: @␣␣␣␣.&quot;; | La eliro estas ”Ĉi tiu tabelo enhavas: 10 9 8 3 2 1.“

## 3

Presu la grandecon de la tabelo (per vokado de la metodo `elems`).

{:.quiz-code}
{@arr.elems} | say &quot;Estas ␣␣␣␣␣␣␣␣ elementoj.&quot;; | Kuraj krampoj necesas por enkorpigi Raku-kodon en Raku-ŝnuron.

{% include quiz.html %}

{% include nav.html %}