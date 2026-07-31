---
title: 'Risinājums: Nododiet deskriptoru funkcijai'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [pass-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/pass-a-handle.raku).

## Izvade

```
started
working
done
```

## Komentāri

1. Turis, ko atgriež `open`, ir vienkārši vērtība, kas glabājas `$fh`, tāpēc to var padot `log-line` kā argumentu gluži tāpat kā jebkuru virkni vai skaitli. Apakšprogrammas iekšienē `$fh.say` raksta caur to pašu atvērto turi.

1. Tā kā turis paliek atvērts visus trīs izsaukumus, katrs `log-line` pievieno tam pašam failam vēl vienu rindu. `close` tad visu izskalo, un `slurp` nolasa trīs rindas atpakaļ.

1. Tieši tas padara turus komponējamus: funkcija var pieņemt turi un tajā rakstīt (vai no tā lasīt), nerūpējoties par to, uz kuru failu tas norāda, — to izlemj izsaucējs, kad failu atver.

{% include nav.html %}
