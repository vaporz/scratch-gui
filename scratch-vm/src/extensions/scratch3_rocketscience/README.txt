0，git clone git@github.com:vaporz/scratch-gui.git
cd stratch-gui
npm install --registry=https://registry.npm.taobao.org

1, cd scratch-vm/src/extensions/scratch3_rocketscience
npm install --registry=https://registry.npm.taobao.org

2, cp -r scratch-vm/* node_modules/scratch-vm/

3, npm run build
4, serve -s build -l tcp://127.0.0.1:8601
访问http://localhost:8601/
