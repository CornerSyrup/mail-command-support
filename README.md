# SMTP Command Support

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

![](./docs/usage.png)

![](./docs/demo.gif)

## Release Notes

See [CHANGELOG](./CHANGELOG.md)
