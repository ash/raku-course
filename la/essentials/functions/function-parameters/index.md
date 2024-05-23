---
title: Function parameters
---

{% include menu.html %}

Tempus est ut aliqua data ad functionem transmittamus. Potest parametra accipere quae in parenthesibus statim post nomen functionis enumerantur.

```raku
sub greet($name) {
    say "Hello, $name!";
}
```

Nunc functionem uti potes et diversos argumentos ei transmittas:

```raku
greet('Alla');
greet('Karl');
```

Duae invocationes eiusdem functionis nunc diversos eventus efficient:

```console
$ raku t.raku
Hello, Alla!
Hello, Karl!
```

%%tipblock

## Parametrum vel argumentum

Hi termini saepe permutabiliter adhibentur. Utrumque ad 'idem rem' referunt, sed ex diversis prospectibus spectant.

* Parametrum est quod functio expectat.
* Argumentum est quod ei transmittis.

In exemplo supra, `$name` est parametrum functionis, dum `'Alla'` et `'Karl'` sunt eius argumenta.

%%/tipblock

## Plura parametra

Functio plus quam unum parametrum accipere potest. In hoc casu, omnia enumerantur separata commatibus:

```raku
sub add($x, $y) {
    say $x + $y;
}

add(10, 20); # 30
```

## Nulla parametra

Validum est casus cum functio nullos omnino parametra accipit. In hoc casu, vel paria parenthesium vacua addere potes vel omnino omittere, sicut fecimus in [initio huius sectionis](../).

```raku
sub greet() {
    say 'Hello, World!';
}

greet();
```

## Signatura

Index parametrorum functionis vocatur _signatura_.

{% include nav.html %}