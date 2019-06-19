// tslint:disable: await-promise
import * as assert from 'assert';
import * as path from 'path';
import { Uri, window, workspace } from 'vscode';
import { getPath } from '../extension';

suite('Extension Tests', () => {
  test('Relative path works', async () => {
    const testPath = Uri.file(path.join(__dirname, '../../src/test/index.ts'));
    const document = await workspace.openTextDocument(testPath);
    await window.showTextDocument(document);

    const useRelative = true;
    const editor = window.activeTextEditor;
    if (editor !== undefined) {
      assert.strictEqual(
        getPath(editor, useRelative),
        workspace.asRelativePath(testPath),
      );
    }
  });

  test('Absolute path works', async () => {
    const testPath = Uri.file(path.join(__dirname, '../../src/test/index.ts'));
    const document = await workspace.openTextDocument(testPath);
    await window.showTextDocument(document);

    const useRelative = false;
    const editor = window.activeTextEditor;
    if (editor !== undefined) {
      assert.strictEqual(getPath(editor, useRelative), testPath.fsPath);
    }
  });
});
