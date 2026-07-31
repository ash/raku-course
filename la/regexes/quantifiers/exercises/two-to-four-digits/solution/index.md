---
title: 'Solutio: A duobus ad quattuor numeros'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say 'abc12345' ~~ / \d ** 2..4 /;
```

🦋 Inveni codicem fontem in archivo [two-to-four-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/two-to-four-digits.raku).

## Exitus

```
｢1234｣
```

## Commentarii

1. `\d ** 2..4` a duabus ad quattuor cifras deinceps congruit.

1. Catena quinque cifras praesto habet, sed intervallum congruentiam ad quattuor coercet, itaque exemplar `1234` capit et ultimam `5` relinquit. Avidum cum sit, plurimum capit quod intervallum permittit potius quam minimum.

1. Aviditas solum intra unam congruentiam valet — machina adhuc ad **primum** locum consistit ubi exemplar succedit. Etiamsi series cifrarum longior postea in catena apparet, ad eam numquam pervenitur:

    ```raku
    say 'abc123def6789012z' ~~ / \d ** 2..4 /;   # ｢123｣
    ```

    Hic `123` congruitur quamquam series posterior `6789012` totum intervallum per `6789` implevisset. Congruentia maxime sinistra vincit.

{% include nav.html %}
