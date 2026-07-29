---
title: Търсене в низове
translations_gpt:
---

{% include menu.html %}

Няколко метода отговарят на въпроси за това какво съдържа даден низ.

Методът `contains` казва дали един низ се среща някъде вътре в друг:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

Методите `starts-with` и `ends-with` проверяват началото и края на низ:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

Когато ви трябва точната позиция на подниз, използвайте `index`. Той връща индекса на първото съвпадение, като брои от нула:

```raku
say 'Raku'.index('k'); # 2
```

Ако поднизът не е намерен, `index` връща `Nil` вместо число:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
