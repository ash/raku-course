---
title: Kvizo — Ricevi post la fino
translations_gpt:
---

{% include menu.html %}

Kanalo havas ĉiujn siajn senditajn valorojn jam ricevitaj. Kio okazas ĉe la **sekva** `.receive`, se la kanalo estas **ankoraŭ malfermita** (neniam fermita)?

{:.quiz}
0 | Ĝi ĵetas `X::Channel::ReceiveOnClosed`
1 | Ĝi blokas, atendante valoron, kiu eble neniam venos
0 | Ĝi redonas `Nil`
0 | Ĝi redonas malplenan liston `()`

{% include quiz.html %}

<div class="extended-explanation">

Sur **malfermita** kanalo, `.receive` ne povas diri, ĉu alia valoro estas survoje, do ĝi atendas — eble eterne, se la produktanto ĉesis sen fermi. La escepto `X::Channel::ReceiveOnClosed` estas la kazo de **fermita** kanalo: nur fermita, malplena kanalo malsukcesas rapide anstataŭ bloki.

</div>

{% include nav.html %}
