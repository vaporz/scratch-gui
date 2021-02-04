export NODE_OPTIONS=--openssl-legacy-provider

0，git clone git@github.com:vaporz/scratch-gui.git
cd stratch-gui
npm install --registry=https://registry.npm.taobao.org

1, cd scratch-vm/src/extensions/scratch3_rocketscience
npm install --registry=https://registry.npm.taobao.org

2, cd -
cp -r scratch-vm/* node_modules/scratch-vm/

3, npm run build
4, npm start
访问http://localhost:8601/


serve -s build -l tcp://127.0.0.1:8601
