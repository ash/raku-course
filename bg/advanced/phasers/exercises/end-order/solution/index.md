---
title: 'Solution: Редът на END'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 Можете да намерите изходния код във файла [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Изход

```
body
second END
first END
```

## Коментари

1. И двата phasera `END` се изпълняват след основния код, така че `body` се отпечатва първо.

1. Множество phasers `END` се изпълняват по принципа последен влязъл, пръв излязъл: `second END`, деклариран по-късно, се изпълнява преди `first END`. Това отразява начина, по който почистването обикновено трябва да отмени най-скорошната настройка първо.

{% include nav.html %}
