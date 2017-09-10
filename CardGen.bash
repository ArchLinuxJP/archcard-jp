#!/bin/bash
function usage() {
cat <<_EOT_
Usage:
  $0 Name Role Picture

Description:
  This script is useful for generating a card.
_EOT_
}

# you should use 3 args for this script
if [ $# != 3 ]; then
	echo "something is lack or too many"
	echo "you should read below"
	usage
	exit 1
fi

# prepare profile picture as a PicData
MIME=`file --brief --mime-type ./pics/"$3"`
PicEncoded=`base64 --wrap=0 ./pics/"$3"`
PicData="$MIME;base64,$PicEncoded"

# replace Name & Role
sed -e 's|{{Name}}|'"$1"'|g' template.svg > ./output/"$1".svg
sed -i -e 's|{{Role}}|'"$2"'|g' ./output/"$1".svg

# replace picture
sed -i -e 's|image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVQI12NgYGAAAAAEAAEnNCcKAAAAAElFTkSuQmCC|'"$PicData"'|g' ./output/"$1".svg
sed -i -e 's|image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVQI12NgYGAAAAAEAAEnNCcK\nAAAAAElFTkSuQmCC|'"$PicData"'|g' ./output/"$1".svg
sed -i -e 's|image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADElEQVQI12NgYGAAAAAEAAEnNCcK\ AAAAAElFTkSuQmCC|'"$PicData"'|g' ./output/"$1".svg

exit 0
