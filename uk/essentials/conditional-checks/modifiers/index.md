---
title: Постфіксні форми if та unless
---

{% include menu.html %}

Raku пропонує дуже зручне рішення, коли ви хочете умовно виконати простий вираз. У цьому випадку немає потреби створювати окремий блок коду. Просто додайте `if` або `unless` одразу після виразу. У Raku такі конструкції називаються _модифікаторами виразів_.

```raku
say 'Добрий день' if $hours > 12;

say 'Усі системи працюють' unless $broken;
```

{% include nav.html %}