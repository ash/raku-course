---
title: 'Solutio: Ansam functioni trade'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [pass-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/pass-a-handle.raku).

## Exitus

```
started
working
done
```

## Commentarii

1. Tractabulum a `open` redditum merus valor in `$fh` servatus est, itaque ad `log-line` ut argumentum tradi potest sicut quaelibet chorda vel numerus. Intra subprogramma `$fh.say` per illud idem tractabulum apertum scribit.

1. Quia tractabulum per omnes tres vocationes apertum manet, unumquodque `log-line` aliam lineam eidem archivo apponit. `close` deinde omnia exhaurit, et `slurp` tres lineas retro legit.

1. Hoc est quod tractabula componibilia reddit: functio tractabulum accipere et in illud scribere (vel ex illo legere) potest sine cura ad quod archivum spectet — vocans id decernit cum archivum aperit.

{% include nav.html %}
