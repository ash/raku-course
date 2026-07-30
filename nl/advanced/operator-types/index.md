---
title: Typen Raku-operatoren
---

{% include menu.html %}

Je hebt al veel operatoren gebruikt — `+`, `~`, `++`, enzovoort. In Raku worden operatoren ingedeeld op basis van _waar_ ze staan ten opzichte van hun operanden. Het kennen van de categorieën helpt later, wanneer je je eigen operatoren definieert.

## `prefix`

Een prefix-operator komt _voor_ een enkele operand:

```raku
my $x = 5;
say -$x; # -5
say ?$x; # True
```

Hier negeert `-` het getal en zet `?` een waarde om naar zijn Booleaanse waarde.

## `infix`

Een infix-operator staat _tussen_ twee operanden. De meeste bekende rekenkundige en string-operatoren zijn infix:

```raku
say 3 + 4;       # 7
say 'a' ~ 'b';   # ab
```

Een infix-operator is niet altijd een leesteken — het kan ook een woord zijn. De `gcd`-operator die je tegenkwam bij [gehele getallen](/nl/advanced/integers) is bijvoorbeeld een infix-operator die als een naam tussen zijn twee operanden geschreven wordt:

```raku
say 12 gcd 18;   # 6
```

## `postfix`

Een postfix-operator komt _na_ een enkele operand:

```raku
my $x = 5;
$x++;
say $x; # 6
```

## `circumfix` en `postcircumfix`

Een circumfix-operator _omsluit_ zijn operand. De vierkante haken die een array opbouwen zijn een circumfix-operator:

```raku
my @a = [1, 2, 3];
```

Een postcircumfix-operator omsluit iets maar volgt op een term. Subscripting is een postcircumfix-operator — de `[1]` na `@a`:

```raku
my @a = 10, 20, 30;
say @a[1]; # 20
```

Deze namen — `prefix`, `infix`, `postfix`, `circumfix` en `postcircumfix` — zijn dezelfde woorden die Raku gebruikt wanneer je [een nieuwe operator declareert](/nl/advanced/user-defined-operators), zoals je later zult zien.

{% include nav.html %}
