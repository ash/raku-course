---
title: Channels
---

{% include menu.html %}

A _channel_ is a thread-safe queue: one part of a program puts values in, another takes them out, and Raku handles all the locking for you. Channels are the standard way to pass a stream of values safely between concurrent tasks — a producer and a consumer.

This section shows how to send and receive values through a channel, and how closing a channel signals that no more values are coming.

{% include nav.html %}
