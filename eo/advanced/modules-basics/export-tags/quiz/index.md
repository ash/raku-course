---
title: Kvizo — Eksportaj etikedoj
---

{% include menu.html %}

Modulo deklaras `sub hello is export` kaj `sub goodbye is export(:partings)`. Post `use Greeting :partings;`, kiujn subprogramojn la programo povas voki rekte?

{:.quiz}
1 | Only `goodbye`
0 | Only `hello`
0 | Both `hello` and `goodbye`
0 | Neither of them

{% include quiz.html %}

<div class="extended-explanation">

Nomado de etikedo importas tiun grupon *anstataŭ* la defaŭltan, do `:partings` alportas `goodbye` sed lasas `hello` malantaŭe. Por ricevi ambaŭ, vi petintus la enkonstruitan etikedon `:ALL` per `use Greeting :ALL;`.

</div>

{% include nav.html %}
