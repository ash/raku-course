---
title: 'Solvo: Transdonu tenilon al funkcio'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub log-line($fh, $message) {
    $fh.say($message);
}

my $fh = open 'log.txt', :w;
log-line($fh, 'started');
log-line($fh, 'working');
log-line($fh, 'done');
$fh.close;

print slurp 'log.txt';
```

🦋 Vi povas trovi la fontkodon en la dosiero [pass-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/pass-a-handle.raku).

## Eligo

```
started
working
done
```

## Komentoj

1. La tenilo redonita de `open` estas nur valoro tenata en `$fh`, do ĝi povas esti transdonita al `log-line` kiel argumento same kiel ĉeno aŭ nombro. Ene de la subrutino, `$fh.say` skribas tra tiu sama malfermita tenilo.

1. Ĉar la tenilo restas malfermita tra ĉiuj tri vokoj, ĉiu `log-line` aldonas alian linion al la sama dosiero. `close` poste elŝovas ĉion, kaj `slurp` relegas la tri liniojn.

1. Jen kio faras tenilojn kunmeteblaj: funkcio povas akcepti tenilon kaj skribi al (aŭ legi el) ĝi sen zorgi, al kiu dosiero ĝi montras — la vokanto decidas tion, kiam ĝi malfermas la dosieron.

{% include nav.html %}
