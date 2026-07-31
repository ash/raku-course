---
title: 'Risinājums: Komandrindas karodziņš'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 Atrodiet programmu failā [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku).

## Izvade

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Komentāri

1. Nosaukts `Bool` parametrs kļūst par karodziņu: nododot `--shout`, `$shout` kļūst `True`, bet, to izlaižot, paliek noklusējums `False`.

1. Trejdaļīgais operators pēc tam attiecīgi izdrukā `HELLO` vai `hello`. Atšķirībā no `--name=value` opcijas karodziņš neņem vērtību — svarīga ir pati tā klātbūtne.

{% include nav.html %}
