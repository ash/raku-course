---
title: Non omnis error statim apparet
translations_gpt:
---

{% include menu.html %}

Ex more exceptio iacta programma statim sistit, et `try` est modus quo eam capis. Sed non omnia quae errores fatales videntur programma tuum eo ipso momento sistunt. Raku defectus habet qui taciti manent — reactionem suam differentes donec effectu utaris, vel tibi permittentes ut eos inspicias et pergas. Nonnulli eorum in hac parte iam apparuerunt, et operae pretium est eos uno loco colligere.

**Divisio per nihil.** Divisio per nihil ibi ubi scripta est non displodit. Valor malus producitur et tacite tenetur; iacit solum cum eo *uteris* — eum imprimens vel convertens, exempli gratia:

```raku
my $x = 1 / 0;    # nullus error hic
say 'still running';
say $x;           # solum nunc iacit
```

Haec dilata agendi ratio, et obiecta `Failure` quae subsunt, sunt argumentum sectionis [Defectus molles](/la/oop/failures).

**Programma externum deficiens.** `Proc` a `run` vel `shell` redditum quod infeliciter exivit non iacit cum producitur. Iacit solum si illud *abicis* non tractatum; serva illud et `.exitcode` lege (vel illud ut Booleanam proba) et defectus manet merus valor ad quem reagere potes. Hoc in [Obiecto Proc](/la/oop/external-programs/the-proc-object) vidisti.

Filum commune: defectus *differri* potest — in valorem versus quem inspicis cum paratus es, potius quam in ruinam statim. `try` et fasis `CATCH` cum erroribus agunt qui statim iaciuntur; haec machinamenta cum eis qui non iaciuntur.

{% include nav.html %}
