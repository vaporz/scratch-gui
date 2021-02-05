#!/bin/bash

# MUST run in folder "scratch-gui"

IMAGE=$1
TARGET=$2
PORT=$3
if [ -z "$IMAGE" ] || [ -z "$TARGET" ] || [ -z "$PORT" ]; then
  printf "Usage:
    deploy.sh [image] [ip] [port]
Example:
    sh deploy.sh scratch_gui 192.168.31.222 8601:8601
"
	exit 0
fi

if [ ! -f "$IMAGE.tar.gz" ];
then
    echo "Building docker image..."
    docker build . -t "$IMAGE" --compress
    docker save -o "$IMAGE".tar.gz "$IMAGE"
fi

echo "xiaoxiao" | ssh -tt zx@$TARGET '
[ ! -d /opt/soft/'"$IMAGE"' ] && sudo mkdir -p /opt/soft/'"$IMAGE"' && sudo chown -R zx:zx /opt'

echo "scp -p -C ./"$IMAGE".tar.gz zx@$TARGET:/opt/soft/'"$IMAGE"'"
scp -p -C ./"$IMAGE".tar.gz zx@$TARGET:/opt/soft/$IMAGE

echo "Starting ScratchGUI..."
echo "xiaoxiao" | ssh -tt zx@$TARGET '
cd /opt/soft/'"$IMAGE"';
sudo docker container stop $(sudo docker container ls -aq -f "ancestor='"$IMAGE"'");
sudo docker load --input '"$IMAGE"'.tar.gz;
sudo docker run -d -p '"$PORT"' '"$IMAGE"';
sudo docker container rm $(sudo docker container ls -aq -f "status=exited");
sudo docker rmi $(sudo docker images -f "dangling=true" -q --no-trunc);
'
