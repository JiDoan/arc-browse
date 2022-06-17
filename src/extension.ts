import { commands, ExtensionContext, window, workspace, TextEditor } from 'vscode';

export const getPath = (editor: TextEditor, useRelative: boolean): string => {
  const uri = editor.document.uri;
  if (uri.scheme !== 'file') {
    const message = 'Open document is not a file.';
    window.showErrorMessage(message);
    throw Error(message);
  }

  return useRelative ? workspace.asRelativePath(uri) : uri.fsPath;
};

export const activate = (context: ExtensionContext) => {
  const disposable = commands.registerCommand('extension.arc-browse', () => {
    const config = workspace.getConfiguration('arc-browse');
    const useRelative = config.get<boolean>('relative', true);
    const branch = config.get<string>('defaultBranch', "master");
    branch.replace(" ", "-");

    const editor = window.activeTextEditor;
    if (editor === undefined) {
      const message = 'No document open.';
      window.showErrorMessage(message);
      throw Error(message);
    }

    const path = getPath(editor, useRelative);
    const line = editor.selection.anchor.line;

    const term = window.createTerminal('arc browse');
    term.sendText(`arc browse --branch ${branch} ${path}:${line + 1}`);
    term.show();
  });

  context.subscriptions.push(disposable);
};
