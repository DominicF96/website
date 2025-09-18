# Scripts Documentation

This project provides several scripts to automate and accelerate development tasks. These scripts are defined in `package.json` and implemented in the `scripts/` directory.

## Available Scripts

### Case Scripts

- **generate:case-index**  
  Runs: `bun scripts/case/case-index.script.ts`  
  Generates or updates the case index. Run this after adding or modifying case content to keep the project listing up-to-date.

- **generate:case-translations**  
  Runs: `bun scripts/case/case-translate.script.ts`  
  Generates or updates translations for case-related content. Run this after editing **english** project description or adding new cases to populate other supported languages. Note that translations are powered by AI and may not be completely accurate, always double-check metadata at the very least.

### News Scripts

- **generate:article-index**  
  Runs: `bun scripts/article/article-index.script.ts`  
  Generates or updates the article index. Use this after adding or editing articles to keep the articles listing current.

- **generate:article-translations**  
  Runs: `bun scripts/article/article-translate.script.ts`  
  Generates or updates translations for article content. Run this after making changes to articles in multiple languages.

## Usage

Run scripts with:

```sh
pnpm run <script-name>
# or
npm run <script-name>
```

Example:
```sh
pnpm run generate:case-index
```

## Benefits

- **Automation**: Reduces manual work and errors by automating repetitive tasks.
- **Consistency**: Keeps indexes and translations up-to-date and consistent.
- **Localization**: Simplifies maintaining multilingual content.
- **Efficiency**: Lets developers focus on core features instead of manual content management.

For more details, see the corresponding files in the `scripts/` directory.
