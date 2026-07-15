---
title: Exercise ’Status with a client‘
---

{% include menu.html %}

## Problem

Fetch a web page's status the easy way — with the **Cro client module** instead of a raw socket. Use `Cro::HTTP::Client.get` to fetch `http://example.com/`, `await` the response, and print its `.status` — no text parsing needed.

> This exercise needs the Cro module installed (`zef install cro`) and a working network connection.

## Example

When run, the program prints:

```
200
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
