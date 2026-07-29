---
title: 'Тест — Прислівники'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма? Зверніть увагу на прислівник `:s` та послідовність пробілів у тексті.

```raku
say so 'hello   world' ~~ /:s hello world/;
```

{:.quiz}
1 | True
0 | False
0 | ｢hello   world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Прислівник `:s` робить пробіл між `hello` та `world` у шаблоні значущим — він вимагає, щоб там був пробільний символ. Годиться один або більше пробілів, тож послідовність із трьох пробілів у тексті підходить, і результатом є `True`. Без `:s` пробіл у шаблоні ігнорувався б, і шаблон шукав би `helloworld`.

</div>

{% include nav.html %}
