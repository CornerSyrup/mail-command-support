import {
    CompletionItem,
    CompletionItemKind,
    CompletionItemProvider,
    ExtensionContext,
    languages,
    ProviderResult,
    SnippetString,
} from "vscode";

import { pop3, smtp } from "./keywords.json";

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
