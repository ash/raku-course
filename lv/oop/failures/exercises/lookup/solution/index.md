---
title: 'Risinājums: Atrasts vai nav atrasts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub lookup($key) {
    fail 'no such key' if $key ne 'a';
    return 100;
}

my $r = lookup('z');
if $r.defined {
    say $r;
}
else {
    say 'not found';
    say "reason: {$r.exception.message}";
}
```

🦋 Atrodiet programmu failā [lookup.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/lookup.raku).

## Izvade

```
not found
reason: no such key
```

## Komentāri

1. `lookup('z')` izsauc `fail`, tāpēc tā atgriež nedefinētu `Failure`.

1. Tā kā rezultāts ir nedefinēts, programma izdrukā `not found`, nevis mēģina neizdevušos vērtību izmantot.

1. `Failure` joprojām nes līdzi izņēmumu, kas apraksta, kas noticis greizi. `$r.exception` to izvelk — un tas arī atzīmē neveiksmi kā apstrādātu, tāpēc tā vēlāk neuzsprāgs — un `.message` nolasa tekstu, kas padots `fail`, proti, `no such key`.

{% include nav.html %}
