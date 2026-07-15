---
title: 'Quiz — HTTP requests'
---

{% include menu.html %}

In an HTTP request sent over a socket, what marks the end of the request headers?

{:.quiz}
0 | A full stop
1 | A blank line (an extra `\r\n`)
0 | The word `END`
0 | Closing the socket

{% include quiz.html %}

<div class="extended-explanation">

HTTP separates the headers from the body — and signals “no more headers” — with a blank line, written as an extra `\r\n`. Without it, the server keeps waiting for the rest of the request.

</div>

{% include nav.html %}
