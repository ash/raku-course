---
title: 'Quiz — Receiving past the end'
---

{% include menu.html %}

A channel has had all its sent values received. What happens on the **next** `.receive` if the channel is **still open** (never closed)?

{:.quiz}
0 | It throws `X::Channel::ReceiveOnClosed`
1 | It blocks, waiting for a value that may never come
0 | It returns `Nil`
0 | It returns an empty list `()`

{% include quiz.html %}

<div class="extended-explanation">

On an **open** channel, `.receive` cannot tell whether another value is on its way, so it waits — potentially forever, if the producer has stopped without closing. The `X::Channel::ReceiveOnClosed` exception is the **closed**-channel case: only a closed, empty channel fails fast instead of blocking.

</div>

{% include nav.html %}
