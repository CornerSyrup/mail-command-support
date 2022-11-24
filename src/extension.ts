import {
    CompletionItem,
    CompletionItemKind,
    CompletionItemProvider,
    ExtensionContext,
    languages,
    ProviderResult,
} from "vscode";

import { pop3 } from "./keywords.json";

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
