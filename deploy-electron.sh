#!/usr/bin/env sh

cp maginet/html/itch.html src/index.html
cp -r maginet/static src/static

wasm-pack build maginet --target web --out-dir src/static/js/pkg --out-name maginet_aee75fc -- --features deploy

npm run make