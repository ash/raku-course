---
title: 'Risinājums: Ielādēt izpildes laikā'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

Programma `require-import.raku`:

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

🦋 Abus pirmkoda failus atrodiet direktorijā [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime).

## Izvade

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Komentāri

1. `require` ielādē moduli izpildes, nevis kompilēšanas laikā. Pats par sevi tas neko neimportē, un tieši tāpēc kails `hello` būtu nezināms.

1. Saraksts `<&hello>` liek `require` importēt šo vienu simbolu, tāpēc pēc šī teikuma `hello('Sam')` var izsaukt tieši, dodot `Hello, Sam!`.

1. Tieši *tam* `require` ir domāts: tā kā tas izpildās izpildes laikā, tas var atrasties `if` iekšienē. Kad dots `--quiet`, šis zars tiek izlaists un modulis nekad netiek ielādēts — kaut kas tāds, no kā kompilēšanas laika `use` izvairīties nespētu.

{% include nav.html %}
