---
title: 'Solutio: Lumina Traffica'
---

{% include menu.html %}

Idea solutionis est 'iterare indicem' array cum quattuor statibus luminis traffici:

```raku
my @lights = <flavum rubrum flavum viride>;
```

Durante primis secundis, numerus secundorum ab initio directe uti potest ut index in array. Cum excedit 3, potes iterare ad initium array cum operatore modulo `%`. Longitudo array est `@lights.elems`, sed cum adhibetur ut operandum `%`, non opus est vocare methodum `elems`, quia nomen array convertetur ad numerum, et illa conversio destinatur ad reddendum numerum elementorum.

## Codex

Hic est solutio:

```raku
my @lights = <flavum rubrum flavum viride>;

dic @lights[51 % @lights];
dic @lights[102 % @lights];
dic @lights[305 % @lights];
```

🦋 Inveni programmatum in archivo [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/traffic-lights.raku).

## Output

Curre programmatum. Praeterea, tenta alias valores in programmate.

```console
$ raku exercises/positionals/traffic-lights.raku
viride
flavum
rubrum
```

{% include nav.html %}