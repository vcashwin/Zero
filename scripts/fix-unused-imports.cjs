#!/usr/bin/env node

/**
 * Script to fix unused imports and variables automatically
 * Usage: node scripts/fix-unused-imports.cjs
 */

const { execSync } = require('child_process');
const path = require('path');

console.log('🔧 Fixing unused imports and variables...\n');

try {
  // Run ESLint with --fix flag to automatically remove unused imports
  console.log('📝 Running ESLint with --fix...');
  execSync('pnpm lint:fix', { stdio: 'inherit', cwd: process.cwd() });
  
  console.log('\n✅ Unused imports and variables have been fixed!');
  console.log('\n📋 Summary of what was fixed:');
  console.log('• Removed unused import statements');
  console.log('• Prefixed unused variables with underscore (_)');
  console.log('• Fixed other auto-fixable ESLint issues');
  
  console.log('\n💡 Tips:');
  console.log('• Run "pnpm format" to format the code');
  console.log('• Run "pnpm lint" to check for remaining issues');
  console.log('• Commit the changes when you\'re ready');
  
} catch (error) {
  console.error('\n❌ Error occurred while fixing unused imports:');
  console.error(error instanceof Error ? error.message : String(error));
  
  console.log('\n🛠️  Manual steps you can try:');
  console.log('1. Run "pnpm lint" to see specific issues');
  console.log('2. Fix unused variables by prefixing them with underscore (_)');
  console.log('3. Remove unused import statements manually');
  console.log('4. Run "pnpm lint:fix" again');
  
  process.exit(1);
}