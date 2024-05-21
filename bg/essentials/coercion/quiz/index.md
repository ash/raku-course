---
title: 'Тест: Какъв е типът му?'
---

{% include menu.html %}

Изберете правилния тип за всеки от изброените литерали.

{:.quiz-select}
Str | `"Hello, World!"` е (: Int, Rat, Num, Str :)
Str | `'Hello, World!'` е (: Int, Rat, Num, Str :)
Int | `12345` е (: Int, Rat, Num, Str :)
Str | `'12345'` е (: Int, Rat, Num, Str :)
Rat | `123.45` е (: Int, Rat, Num, Str :) | Това е рационално число в Raku, а не число с плаваща запетая.
Rat | `500.000` е (: Int, Rat, Num, Str :) | Дори ако числото няма действителна десетична част, типът му не е `Int`.
Int | `500_000` е (: Int, Rat, Num, Str :) | `_` е разделител за хиляди за по-лесно четене от човек.
Str | `'3.14e2'` е (: Int, Rat, Num, Str :) | Това е цитирана последователност от символи, така че е низ.
Rat | `3.14` е (: Int, Rat, Num, Str :)
Num | `3.14e0` е (: Int, Rat, Num, Str :)

{% include quiz.html %}
{% include nav.html %}