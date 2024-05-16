#!/bin/bash
while [ $(lsof -i :3000 | grep node  | wc -l) -gt 0 ]
do
	sleep 0.3;
	lsof -i :3000 | grep node | awk '{print $2}' |  xargs -I {} kill {};
	echo 'kill';
done;
