---
title: Quiz — Interpolating hashes
---

{% include menu.html %}

Gegeven de volgende hash:

```raku
my %letters = α => 'Alpha', β => 'Beta', γ => 'Gamma';
```

Voltooi de onderstaande programma's om de gevraagde uitvoer te krijgen.

## 1

Gebruik de hash om de naam van de Griekse letter `β` te printen. Gebruik de vorm zonder aanhalingstekens rond de sleutelstring.

{:.quiz-code}
&lt;β&gt; | say &quot;De letter β heet %letters␣␣.&quot;;

## 2

Gebruik de hash om de naam van de Griekse letter `β` te printen. Gebruik de vorm waarbij de sleutel is geciteerd in enkele aanhalingstekens.

{:.quiz-code}
{&apos;β&apos;} | say &quot;De letter β heet %letters␣␣␣␣.&quot;;


## 3

Print de letters en hun namen als een tabel.

{:.quiz-code}
letters{ | say &quot;Hier zijn enkele Griekse letters:\n%␣␣␣␣␣}\netc.&quot;; | Let op dat de uitvoer mogelijk niet gesorteerd is.

De mogelijke uitvoer voor dit geval is:

    Hier zijn enkele Griekse letters:
    α	Alpha
    β	Beta
    γ	Gamma
    enz.

{% include quiz.html %}

{% include nav.html %}