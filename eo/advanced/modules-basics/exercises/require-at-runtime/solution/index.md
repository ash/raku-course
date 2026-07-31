---
title: 'Solvo: Ŝargi je rultempe'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

La programo, `require-import.raku`:

```raku
sub MAIN(Bool :$quiet) {
    if $quiet {
        say 'Silence.';
    }
    else {
        require Greeting <&hello>;
        say hello('Sam');
    }
}
```

🦋 Vi povas trovi ambaŭ fontdosierojn en la dosierujo [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime).

## Eligo

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Komentoj

1. `require` ŝargas la modulon je rultempo anstataŭ je kompiltempo. Memstare ĝi importas nenion, kial nuda `hello` estus nekonata.

1. La listo `<&hello>` diras al `require` importi tiun unu simbolon, do post la instrukcio `hello('Sam')` povas esti vokata rekte, donante `Hello, Sam!`.

1. Jen por kio `require` *servas*: ĉar ĝi ruliĝas je rultempe, ĝi povas sidi ene de `if`. Kiam `--quiet` estas donita, tiu branĉo estas preterlasata kaj la modulo neniam estas ŝargata — io, kion kompiltempa `use` ne povus eviti.

{% include nav.html %}
