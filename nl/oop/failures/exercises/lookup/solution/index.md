---
title: 'Oplossing: Opzoeken of niet gevonden'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [lookup.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/lookup.raku).

## Uitvoer

```
not found
reason: no such key
```

## Opmerkingen

1. `lookup('z')` roept `fail` aan en geeft dus een ongedefinieerde `Failure` terug.

1. Omdat het resultaat ongedefinieerd is, drukt het programma `not found` af in plaats van de mislukte waarde te gebruiken.

1. Een `Failure` draagt nog steeds de exceptie mee die beschrijft wat er misging. `$r.exception` haalt hem op — wat de mislukking meteen als afgehandeld markeert, zodat hij later niet alsnog ontploft — en `.message` leest de tekst die aan `fail` is meegegeven, `no such key`.

{% include nav.html %}
