# `arc browse` for VSCode

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/mezzode.arc-browse.svg?style=flat-square&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=mezzode.arc-browse)

This extension adds a command to `arc browse` the current file, for quick access by users of [Phabricator](https://www.phacility.com/phabricator/) and [Arcanist](https://www.phacility.com/phabricator/arcanist/).

## Usage

Just call `Arcanist: Browse` from the command palette.

## Requirements

As this extension just calls `arc browse`, an appropriately configured install of [Arcanist](https://www.phacility.com/phabricator/arcanist/) and a repo configured to work with a [Phabricator](https://www.phacility.com/phabricator/) instance are required.

## Settings

`arc-browse.useRelative`: whether to `arc browse` using relative path to the file (from the workspace root) rather than absolute. Defaults to `true`.

`arc-browse.defaultBranch`: defines the default `arc browse --branch <branch_name>` branch. Defaults to `master`.

## Disclaimer

This extension is not an official product and is not affiliated with [Phacility](https://phacility.com/) or [Phabricator](https://phacility.com/phabricator/).
All trademarks are property of their respective owners.

## Credits

Icon is a recolor derived from an image by GorillaWarfare ([CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0)), and is also published under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) license.
