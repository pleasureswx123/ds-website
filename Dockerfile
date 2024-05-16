FROM gplane/pnpm:9-node18 as dependencies

WORKDIR /opt/

COPY package.json /opt/

RUN yarn install

FROM dependencies as build

COPY ./ /opt/

RUN yarn build
