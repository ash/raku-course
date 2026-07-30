---
title: Meer over MAIN-subroutines
translations_gpt: true
---

{% include menu.html %}

In het onderdeel Essentials heb je `MAIN` gebruikt [om commandoregelargumenten te ontvangen](/nl/essentials/the-main-function/reading-command-line-arguments). Raku doet meer voor je rond `MAIN` dan alleen de waarden doorgeven.

## Het gebruiksbericht

Als de argumenten op de commandoregel niet overeenkomen met de signatuur van `MAIN`, voert Raku de body niet uit. In plaats daarvan drukt het een automatisch gegenereerd _gebruiksbericht_ af dat beschrijft hoe het programma moet worden aangeroepen.

Neem dit programma:

```raku
sub MAIN($name) {
    say "Hello, $name!";
}
```

Correct aangeroepen begroet het de persoon:

```console
$ raku hello.raku Anna
Hello, Anna!
```

Aangeroepen zonder argument komt de signatuur niet overeen, dus drukt Raku het gebruiksbericht af in plaats van de begroeting:

```console
$ raku hello.raku
Usage:
  hello.raku <name>
```

Het bericht wordt opgebouwd uit de namen van de parameters, dus als je ze betekenisvolle namen geeft, wordt de helptekst vanzelf nuttig.

## Benoemde argumenten

Parameters van `MAIN` kunnen zowel benoemd als positioneel zijn. Een benoemde parameter wordt een `--optie=waarde`-schakelaar op de commandoregel, en een standaardwaarde maakt deze optioneel:

```raku
sub MAIN(:$name = 'World') {
    say "Hello, $name!";
}
```

```console
$ raku hello.raku
Hello, World!

$ raku hello.raku --name=Raku
Hello, Raku!
```

{% include nav.html %}
