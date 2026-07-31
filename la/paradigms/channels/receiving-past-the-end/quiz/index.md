---
title: Quiz — Accipere post finem
translations_gpt:
---

{% include menu.html %}

Canalis omnes valores missos iam acceptos habet. Quid fit ad **proximum** `.receive` si canalis **adhuc apertus** est (numquam clausus)?

{:.quiz}
0 | `X::Channel::ReceiveOnClosed` iacit
1 | Moratur, valorem exspectans qui fortasse numquam veniet
0 | `Nil` reddit
0 | Indicem vacuum `()` reddit

{% include quiz.html %}

<div class="extended-explanation">

In canali **aperto**, `.receive` discernere non potest utrum alius valor in via sit, itaque exspectat — fortasse in aeternum, si productor sine claudendo cessavit. Exceptio `X::Channel::ReceiveOnClosed` casus canalis **clausi** est: solum canalis clausus et vacuus cito deficit potius quam moretur.

</div>

{% include nav.html %}
