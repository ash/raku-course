---
title: Quiz — Interpolating arrays
---

{% include menu.html %}

Gegeven de volgende array:

```raku
my @arr = 10, 9, 8, 3, 2, 1;
```

Voltooi de onderstaande programma's om de gevraagde output te krijgen.

## 1

Print het derde element (het item met index `2`).

{:.quiz-code}
[2] | say &quot;Het derde element is @arr␣␣&quot;;

## 2

Print alle elementen (zonder ze allemaal expliciet te indexeren).

{:.quiz-code}
arr[] | say &quot;Deze array bevat: @␣␣␣␣.&quot;; | De output is ”Deze array bevat: 10 9 8 3 2 1.“

## 3

Print de grootte van de array (door de `elems` methode aan te roepen).

{:.quiz-code}
{@arr.elems} | say &quot;Er zijn ␣␣␣␣␣␣␣␣ elementen.&quot;; | Krulhaken zijn vereist om Raku code in een Raku string in te voegen.

{% include quiz.html %}

{% include nav.html %}