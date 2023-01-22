# SMTP Command Support

![GitHub](https://img.shields.io/github/license/KleinChiu/mail-command-support)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/KleinChiu/mail-command-support?sort=semver)
[![Deploy extension](https://github.com/KleinChiu/mail-command-support/actions/workflows/gh-release.yml/badge.svg)](https://github.com/KleinChiu/mail-command-support/actions/workflows/gh-release.yml)

Try it out on [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=cornersyrup.mail-command-support)!

VSCode extension support mail related commands.

## Features

This extension provides the following features:

SMTP:

-   Syntax highlight for SMTP commands
-   Snippets for SMTP commands

POP3:

-   Syntax highlight for POP3 commands
-   Snippets for POP3 commands
-   Tab completion for POP3 commands

## Usage

Here is an example to use this extension to create automated script.

1. Create a mail template.
2. Create a sending script
3. Run it

Then you'll send a daily greeting mail to your love automatically.

`template.smtp`:

```smtp
MAIL FROM: alice@example.com
RCPT TO: bob@example.com
DATA
subject: Hi Bob

How's your day?

%DATE%
QUIT
```

`greeting.sh`:

```sh
#! /bin/bash

cat template.smtp | sed -e "s/%DATE%/$(date)/" | nc localhost 25
```

### Syntax highlight

![](usage.png)

![](demo.gif)

## Release Notes

See [CHANGELOG](CHANGELOG.md)
