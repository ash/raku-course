---
title: 'Solution: Een variabele beschrijven'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 Je kunt de broncode vinden in het bestand [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Uitvoer

```
Str
Scalar
$lang
```

## Opmerkingen

1. `.^name` geeft het type terug van de waarde die in de container is opgeslagen, namelijk `Str`.

1. `.VAR` geeft de onderliggende container terug, en `.^name` daarop geeft `Scalar` terug — het type van de container zelf.

1. `.VAR.name` geeft de naam van de variabele terug, `$lang`, inclusief zijn sigil. Merk op dat dit de `name`-methode is, niet de `^name` meta-methode die op de eerste twee regels wordt gebruikt.

{% include nav.html %}
