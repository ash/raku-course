---
title: Dumpado de funkciaj subskriboj
---

{% include menu.html %}

Nuda `dd` — vokita sen argumentoj ene de subrutino — presas la signaturon de tiu subrutino: ĝian nomon kaj la liston de parametroj, se ĝi havas. Ekzamenu la sekvan ekzemplon kun du subrutinoj:

```raku
sub f1 {
    dd
}

f1();

sub f2($x) {
    dd
}

f2(42);
```

La programo presas la signaturojn anstataŭ iujn ajn valorojn:

```console
sub f1()
sub f2($x)
```

Ĉi tio estas speciale utila kun plur-funkcioj, kie ĝi diras al vi, kiu kandidato estis efektive vokita:

```raku
multi sub g {
    dd
}

multi sub g($x) {
    dd
}

g();
g(42);
```

La eligo nomas la kongruan varianton ĉiufoje:

```console
sub g()
sub g($x)
```

{% include nav.html %}
