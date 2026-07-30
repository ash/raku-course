---
title: Scalaire containers
translations_gpt:
---

{% include menu.html %}

Zoals de naam al suggereert, bevatten scalaire containers enkele (scalaire) waarden. Zulke containers worden aangeduid met het `$`-sigil.

Hier is een van de eenvoudigste en meest directe toepassingen van een scalar:

```raku
my $lang = 'Raku';
```

De variabele `$lang` is een scalaire container.

Standaard leggen scalaire containers geen type op aan de gegevens, dus je kunt er een waarde van elk type in opslaan. De eenvoudigste demonstratie hiervan is dat je dezelfde variabele kunt hergebruiken om eerst een geheel getal en daarna een string op te slaan:

```raku
my $value = 42;
$value = 'forty-two';
```

(De auteur moedigt je niet aan om op deze manier te programmeren.)

Intern betekent dit dat een nieuwe container standaard waarden van het type `Any` kan bevatten. `Any` is het basistype voor de meeste andere typen, zoals `Int` of `Str`.

{% include nav.html %}
