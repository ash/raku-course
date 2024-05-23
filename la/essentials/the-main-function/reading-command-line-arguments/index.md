---
title: Reading command line arguments
---

{% include menu.html %}

`MAIN` functio utilis est non solum ad locum initii programmatis explicite collocandum, sed etiam propter argumenta sua, quae valores in linea mandati transmittuntur accipiunt.

Duae sunt viae ad legendum argumenta lineae mandati. Una earum est per [`@*ARGS` array](/la/essentials/positionals/args-array), quam iam usi sumus. Nunc alteram methodum examinemus.

Considera programma quod duos numeros addit.

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

Potes programma hoc modo currere. Programma summam duorum argumentorum suorum imprimit:

```console
$ raku t.raku 123 45
168
```

Ut quaelibet alia functio, `MAIN` functio potest habere valores praedefinitos pro aliquibus (vel etiam omnibus) argumentis suis. Exempli gratia:

```raku
sub MAIN($a, $b = 100) {
    say $a + $b;
}
```

Si secundum argumentum non praebetur, valor praedefinitus adhibetur:

```console
$ raku t.raku 15
115
```

{% include nav.html %}