---
title: 'Quiz: Operationes Boolean'
---

{% include menu.html %}

In unaquaque sectione infra, selige responsum rectum quod programma imprimit.

## 1

Hic est programma:

```raku
my $value = True && False;
say $value;
```

Quid imprimit?

{:.quiz}
0 | Verum
1 | Falsum

## 2 

Quid secundum programma imprimit?

```raku
my $value = True && False || True;
say $value;
```

{:.quiz}
1 | Verum
0 | Falsum

## 3

Quid est output huius programmatis?

```raku
my $value = True || False && True;
say $value;
```

{:.quiz}
1 | Verum
0 | Falsum

{% include quiz.html %}

## Commentarii

In secundo et tertio programmate, habemus expressiones cum tribus valoribus Booleanis. Eventus pendet ordine quo operationes exsequuntur. Operator `&&` habet praecedentiam arctiorem quam `||`, ergo primus exsequitur.

{% include nav.html %}