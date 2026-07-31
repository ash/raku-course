---
title: Signaturas functionum dumping
translations_gpt:
---

{% include menu.html %}

`dd` nudum — sine argumentis intra subroutinam vocatum — signaturam illius subroutinae imprimit: nomen eius et indicem parametrorum, si quos habet. Inspice exemplum sequens cum duabus subroutinis:

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

Programma signaturas potius quam valores imprimit:

```console
sub f1()
sub f2($x)
```

Hoc praecipue utile est cum multi-functionibus, ubi indicat quae candidata revera vocata sit:

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

Output variantem congruentem quaque vice nominat:

```console
sub g()
sub g($x)
```

{% include nav.html %}
