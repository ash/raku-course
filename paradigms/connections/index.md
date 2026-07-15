---
title: Making remote connections
---

{% include menu.html %}

The last subpart of the course turns to _web_ programming — talking to other machines over the network. We build up from the bottom: a raw network connection, then a simple HTTP client, a simple HTTP server, and finally a glimpse of the Cro framework.

Unlike the rest of the course, these examples need a **network connection** to run, and the later ones need modules you install yourself. The code is written to compile and to work when you run it against a real server, but its output cannot be shown the way the offline examples can. Each page notes what it needs.

We begin with the foundation of all network code: a _socket_, the two-way pipe between two programs across a network.

{% include nav.html %}
