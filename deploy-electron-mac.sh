#!/usr/bin/env sh

cd "maginet"
wasm-pack build --target web --out-dir static/js/pkg --out-name maginet_aee75fc -- --features "deploy"

cd -
cp "maginet/html/itch.html" "src/index.html"
cp -rf "maginet/static" "src"

npm run build-mac

cd "maginet"
wasm-pack build --target web --out-dir static/js/pkg --out-name maginet_aee75fc -- --features "deploy demo"

cd -
cp "maginet/html/itch.html" "src/index.html"
cp -rf "maginet/static" "src"

npm run build-mac-demo
