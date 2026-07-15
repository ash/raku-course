---
title: Exercise ’Upper-case the path‘
---

{% include menu.html %}

## Problem

Make the server do real work with the client's input, rather than returning a fixed string. Write a server that, in a **loop** (as on the previous page), reads each request, takes the requested **path**, and sends it back **upper-cased** — so a request for `/hello` replies with `HELLO`. The path is the second word of the request's first line (`GET /hello HTTP/1.0`); drop the leading `/` before upper-casing it. It keeps serving request after request; stop it with Ctrl-C.

## Example

Requesting a path with `curl` returns it in capitals:

```console
$ curl http://127.0.0.1:8080/hello
HELLO
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
