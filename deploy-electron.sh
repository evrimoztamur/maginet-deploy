#!/usr/bin/env sh

cd "maginet"
wasm-pack build --target web --out-dir static/js/pkg --out-name maginet_aee75fc -- --features deploy

cd -
cp "maginet/html/itch.html" "index.html"
cp -r "maginet/static" "."

# npm run make
