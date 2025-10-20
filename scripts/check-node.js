#!/usr/bin/env node
const semver = (v) => v.replace(/^v/,'').split('.').map(n=>parseInt(n,10));
const [maj, min, pat] = semver(process.version);
const req = [20, 11, 1];
function lt(a,b){ for(let i=0;i<3;i++){ if(a[i]<b[i])return true; if(a[i]>b[i])return false;} return false; }
if (lt([maj,min,pat], req)) {
  console.error(`[31mERROR[0m: Node ${req.join('.')} or newer required. You are on ${process.version}.
Use nvm to install/use the required version:
  nvm install 20.11.1
  nvm use 20.11.1
`);
  process.exit(1);
}
