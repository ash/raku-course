---
title: Pli pri MAIN-subrutino
translations_gpt:
---

{% include menu.html %}

En la parto Esencaĵoj vi uzis `MAIN` [por ricevi komandliniajn argumentojn](/eo/essentials/the-main-function/reading-command-line-arguments). Raku faras pli por vi ĉirkaŭ `MAIN` ol nur transdoni la valorojn.

## La uzad-mesaĝo

Se la argumentoj en la komandlinio ne kongruas kun la signaturo de `MAIN`, Raku ne plenumas la korpon. Anstataŭe, ĝi presas aŭtomate generitan _uzad-mesaĝon_, kiu priskribas kiel la programo devus esti vokita.

Prenu ĉi tiun programon:

```raku
sub MAIN($name) {
    say "Hello, $name!";
}
```

Vokite ĝuste, ĝi salutas la personon:

```console
$ raku hello.raku Anna
Hello, Anna!
```

Vokite sen argumento, la signaturo ne kongruas, do Raku presas la uzadon anstataŭ la saluton:

```console
$ raku hello.raku
Usage:
  hello.raku <name>
```

La mesaĝo estas konstruita el la nomoj de la parametroj, do doni al ili signifoplenajn nomojn faras la helptekston utila senpage.

## Nomitaj argumentoj

Parametroj de `MAIN` povas esti nomitaj same kiel poziciaj. Nomita parametro fariĝas `--option=value` ŝaltilo en la komandlinio, kaj defaŭlta valoro faras ĝin nedeviga:

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
