# 🌟 Contributing

You want to contribute to this project, and we're thankful for that ❤. But first, please be sure to read the contribution guidelines before making or requesting a change.

## 🤝 How To Contribute

1. [**Fork**](https://github.com/happychuks/devhubs.git) the project.
2. Create a new topic branch on your local forked copy.
3. Before committing any change, ensure that your branch name, commit message, code quality and tests are standard and working.
4. Push your topic branch up to your fork.
5. [**Open a Pull Request**](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests) with a clear title and description against the `dev` branch.

## 🆕 Commit Messages

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope**, and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory, and the **scope** of the header is optional as of **body** and **footer**.

Any line of the commit message cannot be longer 100 characters ! This allows the message to be easier to read on GitHub as well as in various git tools.

#### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.
In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Type

Must be one of the following:

- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation only changes.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **perf**: A code change that improves performance.
- **test**: Adding missing or correcting existing tests.
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation.

#### Scope

The scope could be anything specifying place of the commit change. For example `test`, `ci`, `algorithm`, `python`, etc...

You can use `*` when the change affects more than a single scope.

#### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

#### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
[reference GitHub issues that this commit closes][closing-issues].

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

[angular-contributing]: https://raw.githubusercontent.com/angular/angular.js/master/CONTRIBUTING.md
[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#