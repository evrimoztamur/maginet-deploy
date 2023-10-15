cd "maginet"
wasm-pack build --target web --out-dir static/js/pkg --out-name maginet_aee75fc -- --features "deploy"

cd ..
cp "maginet/html/itch.html" "src/index.html"
cp -Recurse -Force "maginet/static" "src"

npm run build-windows

cd "maginet"
wasm-pack build --target web --out-dir static/js/pkg --out-name maginet_aee75fc -- --features "deploy demo"

cd ..
cp "maginet/html/itch.html" "src/index.html"
cp -Recurse -Force "maginet/static" "src"

npm run build-windows-demo
