---
title: Компонування кількох ролей
translations_gpt:
---

{% include menu.html %}

Клас може виконувати більш ніж одну роль. Ви просто перелічуєте кожну з власним `does`:

```raku
role Walk {
    method move { 'walking' }
}

role Swim {
    method dive { 'diving' }
}

class Duck does Walk does Swim {
}
```

Клас `Duck` тепер має і метод `move` із `Walk`, і метод `dive` із `Swim`:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Таке поєднання ролей називають _композицією_. Воно дозволяє скласти клас із кількох незалежних частин поведінки, що часто гнучкіше за побудову єдиного ланцюжка успадкування: клас може підмішати рівно ті можливості, які йому потрібні, і нічого більше.

{% include nav.html %}
