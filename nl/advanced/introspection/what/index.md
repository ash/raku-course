---
title: '`WHAT` gebruiken'
---

{% include menu.html %}

`WHAT` is een pseudo-methode die toegang geeft tot het type van een waarde. Je kunt het op vrijwel dezelfde manier gebruiken als `.^name`:

```raku
my $var = 42;

say $var.^name;
say $var.WHAT;
```

De twee drukken het type af met een klein verschil in weergave: `.^name` geeft de kale naam, terwijl `WHAT` het type object toont, geschreven tussen haakjes:

```
Int
(Int)
```

Voor een variabele zonder typebeperking begint het type als `Any`. Zodra je een waarde toewijst, volgen zowel `^name` als `WHAT` het type van de opgeslagen waarde:

```raku
my $var;
say $var.^name; # Any
say $var.WHAT;  # (Any)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

Met een typebeperking is het type direct bekend, zelfs voordat er iets is toegewezen:

```raku
my Str $var;
say $var.^name; # Str
say $var.WHAT;  # (Str)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

## Type objects vergelijken

Omdat `WHAT` het type object zelf teruggeeft, kun je er twee vergelijken met de _waarde-identiteit_-operator `===`, die vraagt of beide kanten exact dezelfde waarde zijn. Er is altijd maar één type object per type, dus dit is een nette manier om te testen of twee waarden hetzelfde type delen:

```raku
my $a = 42;
my $b = 100;

say $a.WHAT === $b.WHAT; # True  — both are Int
say $a.WHAT === Int;     # True
say $a.WHAT === Str;     # False
```

Anders dan `==`, dat getallen vergelijkt, vergelijkt `===` identiteit, dus het werkt direct voor type objects (en andere waarden).

{% include nav.html %}
