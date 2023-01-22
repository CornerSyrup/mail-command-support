import {
    CompletionItem,
    CompletionItemKind,
    CompletionItemProvider,
    ExtensionContext,
    languages,
    ProviderResult,
} from "vscode";

export default class POP3CompletionProvider implements CompletionItemProvider {
    public provideCompletionItems(): ProviderResult<CompletionItem[]> {
        const keywords = pop3.map((record) => {
            const item = new CompletionItem(
                record.label,
                CompletionItemKind.Keyword
            );

            item.insertText = record.text;
            item.documentation = record.documentation;

            return item;
        });
        return [...keywords];
    }
}

export function activate(context: ExtensionContext) {
    const provider = languages.registerCompletionItemProvider(
        "pop3",
        new POP3CompletionProvider()
    );

    context.subscriptions.push(provider);
}

export function deactivate() {}

const pop3 = [
    { text: "USER", label: "USER", documentation: "Login username" },
    { text: "PASS", label: "PASS", documentation: "Login password" },
    { text: "QUIT", label: "QUIT", documentation: "Quit session" },
    {
        text: "STAT",
        label: "STAT",
        documentation: "Statistic of messages",
    },
    { text: "LIST", label: "LIST", documentation: "List messages" },
    {
        text: "RETR",
        label: "RETR",
        documentation: "Retrieve the whole messages",
    },
    {
        text: "DELE",
        label: "DELE",
        documentation: "Delete the message",
    },
    {
        text: "TOP",
        label: "TOP",
        documentation: "Header and Top few lines of message",
    },
    {
        text: "UIDL",
        label: "UIDL",
        documentation: "Unique ID of a message",
    },
    { text: "NOOP", label: "NOOP", documentation: "No Operation" },
    {
        text: "RSET",
        label: "RSET",
        documentation: "Undelete messages that marked for deletion",
    },
];
