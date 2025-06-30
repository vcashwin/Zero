# Unused Imports and Variables Setup

This project has been configured with strict ESLint rules to automatically detect and remove unused imports and variables. This helps keep the codebase clean and maintainable.

## 🔧 What's Configured

### ESLint Rules
- **`unused-imports/no-unused-imports`**: Automatically removes unused import statements
- **`unused-imports/no-unused-vars`**: Detects unused variables with smart naming conventions
- **`@typescript-eslint/no-unused-vars`**: Enhanced TypeScript unused variable detection

### Naming Conventions
Variables that start with `_` (underscore) are considered intentionally unused and won't trigger errors:
```typescript
// ❌ This will cause an error
const data = fetchData();
const result = processData();

// ✅ This is fine (prefixed with underscore)
const _data = fetchData();
const _result = processData();

// ✅ Function parameters can be prefixed too
function handler(event, _context) {
  // Only using event, context is unused but prefixed
}
```

## 🚀 Quick Start

### 1. Check for Issues
```bash
pnpm lint
```

### 2. Auto-fix Issues
```bash
# Fix unused imports and auto-fixable issues
pnpm lint:fix

# Or use our helper script
pnpm fix-unused
```

### 3. Manual Fixes
For issues that can't be auto-fixed:
```bash
# See specific errors
pnpm lint

# Fix manually by:
# - Removing unused variables
# - Prefixing intentionally unused variables with _
# - Removing unused imports
```

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `pnpm lint` | Check for linting issues |
| `pnpm lint:fix` | Auto-fix linting issues |
| `pnpm fix-unused` | Run our helper script to fix unused imports |
| `pnpm check` | Run both linting and formatting checks |
| `pnpm format` | Format code with Prettier |

## 🔍 GitHub Actions

### Automatic Checks
Every pull request will automatically:
1. ✅ Check for unused imports and variables
2. ✅ Verify code formatting
3. ✅ Run all ESLint rules
4. ❌ Block merge if issues are found

### Workflow Files
- `.github/workflows/lint-check.yml` - Main linting workflow
- `.github/workflows/ci.yml` - General CI with linting

## 📝 Common Scenarios

### Unused Function Parameters
```typescript
// ❌ Error: 'event' is unused
function handler(event, context) {
  return context.success();
}

// ✅ Solution 1: Remove unused parameter
function handler(context) {
  return context.success();
}

// ✅ Solution 2: Prefix with underscore
function handler(_event, context) {
  return context.success();
}
```

### Unused Destructured Variables
```typescript
// ❌ Error: 'name' is unused
const { id, name, email } = user;
console.log(id, email);

// ✅ Solution 1: Don't destructure unused variables
const { id, email } = user;
console.log(id, email);

// ✅ Solution 2: Prefix with underscore
const { id, name: _name, email } = user;
console.log(id, email);
```

### Unused Imports
```typescript
// ❌ These will be automatically removed by ESLint --fix
import { useState, useEffect } from 'react'; // Only useState used
import { debounce } from 'lodash'; // Not used at all

function Component() {
  const [state, setState] = useState(0);
  return <div>{state}</div>;
}

// ✅ After auto-fix
import { useState } from 'react';

function Component() {
  const [state, setState] = useState(0);
  return <div>{state}</div>;
}
```

## 🚨 Troubleshooting

### "Command not found" errors
Make sure you've installed dependencies:
```bash
pnpm install
```

### ESLint errors persist after --fix
Some issues require manual intervention:
1. Review the error messages
2. Prefix unused variables with `_`
3. Remove or use unused variables
4. Run `pnpm lint` again to verify

### CI/CD failures
If the GitHub Action fails:
1. Run `pnpm lint` locally
2. Fix all issues with `pnpm lint:fix` and manual fixes
3. Commit and push changes
4. The action will re-run automatically

## 📚 Best Practices

1. **Run linting before committing**: Always run `pnpm lint` before pushing code
2. **Use the fix script**: `pnpm fix-unused` provides helpful guidance
3. **Prefix intentionally unused variables**: Use `_` prefix for variables you need to keep
4. **Remove truly unused code**: Don't just prefix everything - clean up when possible
5. **Check CI status**: Don't merge PRs with failing lint checks

## 🔗 Related Documentation

- [ESLint unused-imports plugin](https://github.com/sweepline/eslint-plugin-unused-imports)
- [TypeScript ESLint rules](https://typescript-eslint.io/rules/no-unused-vars/)
- [Project ESLint configuration](./packages/eslint-config/config.ts)

---

This setup ensures our codebase stays clean and maintainable by automatically catching and fixing unused imports and variables! 🎉