---
title: 'Solutio: Mandatum exsequere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
run 'echo', 'home:', '$HOME';
```

🦋 Inveni codicem fontem in archivo [run-a-command.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/run-a-command.raku).

## Exitus

```
home: $HOME
```

## Commentarii

1. `run` `echo` directe lanciat, unamquamque chordam ut argumentum separatum tradens. Sine `:out`, exitus programmatis recta in screen it.

1. Argumentum ad `echo` exacte ut scriptum pervenit: `$HOME` litteraliter imprimitur, non directoria domestica tua substituta, quia nullus interpres adest qui illud expandat. Hac de causa `run` electio praedefinita tuta est — idem imperatum ad `shell` datum valde aliter se gerere posset.

1. Ut directoriam domesticam revera imprimas, sine interpretem expansionem agere: `shell 'echo home: $HOME'` aliquid quale `home: /home/anna` imprimit. (Serva etiam virgulas simplices in parte Raku — `"$HOME"` duplicibus virgulis clausum ipsum Raku conaretur variabilem nomine `$HOME` interpolare antequam `echo` umquam curreret.)

{% include nav.html %}
