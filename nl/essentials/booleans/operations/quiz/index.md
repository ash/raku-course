---
title: 'Quiz: Booleaanse operaties'
---

{% include menu.html %}

Selecteer in elk van de onderstaande secties het juiste antwoord dat het programma afdrukt.

## 1

Hier is het programma:

```raku
my $value = True && False;
say $value;
```

Wat drukt het af?

{:.quiz}
0 | True
1 | False

## 2 

Wat drukt het tweede programma af?

```raku
my $value = True && False || True;
say $value;
```

{:.quiz}
1 | True
0 | False

## 3

Wat is de uitvoer van dit programma?

```raku
my $value = True || False && True;
say $value;
```

{:.quiz}
1 | True
0 | False

{% include quiz.html %}

## Opmerkingen

In het tweede en derde programma hebben we uitdrukkingen met drie Booleaanse waarden. Het resultaat hangt af van de volgorde waarin de operaties worden uitgevoerd. De `&&` operator heeft een strakkere prioriteit dan `||`, dus wordt deze eerst uitgevoerd.

{% include nav.html %}