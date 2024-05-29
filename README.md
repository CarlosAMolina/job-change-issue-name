# job-modify-issue-name

## Introduction

Modify the name of a Jira's issuer to create git branches, folders, etc.

## Considerations

- The first part of the string to modify must be the issuer ID because the characters until the first white space will not be modified no lowercase.

## Test

Modify the `src/modify-name.js` file:

- Comment the lines with `document`.
- Uncomment the `exportedForTesting` constant.

Run:

```bash
npm install
npm test
```

### Open the web in your local browser

```bash
npm run web
```

## Resources

Pre-commit
https://github.com/CarlosAMolina/pre-commit-js/blob/main/README.md

