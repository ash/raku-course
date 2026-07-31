---
title: Quiz — Classes actionum
translations_gpt:
---

{% include menu.html %}

Quomodo `.parse` iubes classe actionum nomine `MyActions` uti?

{:.quiz}
0 | `Grammar.parse($str, MyActions)`
1 | `Grammar.parse($str, actions => MyActions.new)`
0 | `Grammar.parse($str).MyActions`
0 | `Grammar.parse($str, action => MyActions)`

{% include quiz.html %}

<div class="extended-explanation">

Obiectum actionum per argumentum nominatum `actions` traditur, et **exemplar** esse debet, per `.new` creatum. Dum grammatica analysat, methodi tesserarum congruentes in illo exemplari currunt et effectum aedificant.

</div>

{% include nav.html %}
