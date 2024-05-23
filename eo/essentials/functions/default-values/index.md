---
title: Defaŭltaj valoroj
---

{% include menu.html %}

Ambaŭ poziciaj kaj nomitaj parametroj povas havi defaŭltajn valorojn. Se la funkcio havas defaŭltan valoron por la donita parametro, tiu parametro povas esti preterlasita kiam oni vokas la funkcion.

## Poziciaj parametroj

Ekzemplo de defaŭlta valoro por funkcio kun poziciaj parametroj:

```raku
sub greet($name = 'World') {
    say "Hello, $name!";
}

greet('Merinda');
greet();
```

La unua voko uzas la nomon pasitan kiel la sola argumento kaj tiel presas `Hello, Merinda!`. La dua voko uzas la defaŭltan valoron kaj presas `Hello, World!`.

Se funkcio havas pli ol unu parametrojn, tiam la defaŭltaj valoroj povas esti uzataj nur ĉe la fino de la listo de ili:

```raku
sub f($a, $b, $c = 42, $d = 50) { . . . } # ĝuste
# sub f($a = 10, $b = 20, $c, $d) { . . . } # MALĜUSTE
```

## Nomitaj parametroj

La sama sintakso estas uzata por agordi defaŭltajn valorojn por nomitaj parametroj:

```raku
sub greet(:$name = 'World') {
    say "Hello, $name!";
}

greet(name => 'Merinda'); # Hello, Merinda!
greet(); # Hello, World!
```

La ordo de la nomitaj parametroj ne gravas, do iu ajn el ili povas havi defaŭltajn valorojn, eĉ la unua en la listo:

```raku
sub greet(:$greeting = 'Hello', :$name) {
    say "$greeting, $name!";
}

greet(name => 'Alla'); # Hello, Alla!
```

{% include nav.html %}