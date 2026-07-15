---
title: A simple HTTP server
---

{% include menu.html %}

A _server_ is the other side of a connection: instead of reaching out to a remote machine, it waits for clients to reach **in**. The same core class, `IO::Socket::INET`, does this too — you just put it in listening mode.

This section builds a tiny web server by hand: listen for a connection, read the request, and send back an HTTP response. Like the socket examples earlier, these need to be run on your own machine and connected to with a browser or another program.

{% include nav.html %}
