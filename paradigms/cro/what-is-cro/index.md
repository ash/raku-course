---
title: What is Cro
---

{% include menu.html %}

Cro is a set of libraries for building **services** — programs that talk to other programs over the network. It is best known for HTTP, but it also handles WebSockets, and it builds everything on the reactive tools from earlier in this part: [supplies](/paradigms/supplies), `react`, and `whenever`. A Cro request handler is, at heart, a reaction to a stream of incoming requests.

What Cro gives you over raw sockets:

* **Routing** — map URL paths to the code that handles them, instead of parsing requests by hand.
* **Request and response objects** — read query parameters and send JSON without assembling text.
* **Concurrency** — many clients are served at once, on the thread pool, automatically.
* **Composability** — services are built from small pieces you can test and combine.

You install it from the ecosystem:

```
zef install cro
```

Cro is a big framework with many dependencies, so this takes a few minutes. If the installation stops on a dependency identity it cannot find — an error mentioning something like `JSON::Fast:ver<0.19+>:auth<cpan:TIMOTIMO>` — your copy of `zef` is too old to know the archive that serves such historical module identities. Upgrade the installer itself with `zef install zef`, open a fresh terminal, and run the Cro installation again.

Cro brings the whole course together: object-oriented design for its types, the functional style in its handlers, and the reactive model for its streams of requests. The next topic shows the smallest possible Cro service so you can see how those ideas come together in real web code.

{% include nav.html %}
