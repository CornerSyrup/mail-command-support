import {
    CompletionItem,
    CompletionItemKind,
    CompletionItemProvider,
    ExtensionContext,
    languages,
    ProviderResult,
    SnippetString,
} from "vscode";

interface KeywordInfo {
    label: string;
    text?: string;
    docs?: string;
}

const keywordCompletionItem = ({ label, text, docs }: KeywordInfo) => {
    const item = new CompletionItem(label, CompletionItemKind.Keyword);

    item.insertText = new SnippetString(text);
    item.documentation = docs;

    return item;
};

class POP3CompletionProvider implements CompletionItemProvider {
    public provideCompletionItems(): ProviderResult<CompletionItem[]> {
        return pop3.map(keywordCompletionItem);
    }
}

class SMTPCompletionProvider implements CompletionItemProvider {
    public provideCompletionItems(): ProviderResult<CompletionItem[]> {
        return smtp.map(keywordCompletionItem);
    }
}

export function activate(context: ExtensionContext) {
    const pop3 = languages.registerCompletionItemProvider(
        "pop3",
        new POP3CompletionProvider()
    );

    const smtp = languages.registerCompletionItemProvider(
        "smtp",
        new SMTPCompletionProvider()
    );

    context.subscriptions.push(pop3, smtp);
}

export function deactivate() {}

const pop3 = [
    { text: "USER ", label: "USER", docs: "Login username" },
    { text: "PASS ", label: "PASS", docs: "Login password" },
    { text: "QUIT", label: "QUIT", docs: "Quit session" },
    {
        text: "STAT",
        label: "STAT",
        docs: "Statistic of messages",
    },
    { text: "LIST", label: "LIST", docs: "List messages" },
    {
        text: "RETR ",
        label: "RETR",
        docs: "Retrieve the whole messages",
    },
    {
        text: "DELE ",
        label: "DELE",
        docs: "Delete the message",
    },
    {
        text: "TOP ${1:index} ${2:lines}",
        label: "TOP",
        docs: "Header and Top few lines of message",
    },
    {
        text: "UIDL ",
        label: "UIDL",
        docs: "Unique ID of a message",
    },
    { text: "NOOP", label: "NOOP", docs: "No Operation" },
    {
        text: "RSET",
        label: "RSET",
        docs: "Undelete messages that marked for deletion",
    },
];

const smtp = [
    {
        text: "HELO ",
        label: "HELO",
        docs: "It provides the identification of the sender.",
    },
    {
        text: "MAIL FROM: ",
        label: "MAIL",
        docs: "It specifies the originator of the mail.",
    },
    {
        text: "RCPT TO: ",
        label: "RCPT",
        docs: "It specifies the recipient of mail.",
    },
    {
        text: "DATA",
        label: "DATA",
        docs: "It specifies the beginning of the mail.",
    },
    {
        text: "QUIT",
        label: "QUIT",
        docs: "It closes the TCP connection.",
    },
    {
        text: "RSET",
        label: "RSET",
        docs: "It aborts the current mail transaction but the TCP connection remains open.",
    },
    {
        text: "VRFY ",
        label: "VRFY",
        docs: "It is use to confirm or verify the user name.",
    },
    { text: "NOOP", label: "NOOP", docs: "No operation" },
    {
        text: "TURN",
        label: "TURN",
        docs: "It reverses the role of sender and receiver.",
    },
    {
        text: "EXPN ",
        label: "EXPN",
        docs: "It specifies the mailing list to be expanded.",
    },
    {
        text: "HELP",
        label: "HELP",
        docs: "It send some specific docs to the system.",
    },
    {
        text: "SEND FROM: ",
        label: "SEND",
        docs: "It send mail to the terminal.",
    },
    {
        text: "SOML FROM: ",
        label: "SOML",
        docs: "It send mail to the terminal if possible; otherwise to mailbox.",
    },
    {
        text: "SAML FROM: ",
        label: "SAML",
        docs: "It send mail to the terminal and mailbox.",
    },
];
