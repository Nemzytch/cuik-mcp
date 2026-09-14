// A package can be packed only after the matching backend parity gate succeeded.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const hash=p=>createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const pkg=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
try {
 const receipt=JSON.parse(fs.readFileSync(path.join(root,'release-contract.json'),'utf8'));
 if(receipt.version!==pkg.version || receipt.dist_sha256!==hash('dist/index.js') || receipt.lock_sha256!==hash('package-lock.json') || receipt.failures!==0 || receipt.scenarios<60) throw Error('stale qualification');
 if(fs.existsSync(path.join(root,'src/index.ts')) && receipt.source_sha256!==hash('src/index.ts')) throw Error('source changed after qualification');
 console.log(`Cuik MCP ${pkg.version}: ${receipt.tools} tools, ${receipt.scenarios} parity scenarios; artifact verified.`);
} catch(e) { console.error('MCP package is not qualified. Run Cuik-Api-V3/tools/qualify_mcp_release.sh against this checkout.');process.exit(1); }
