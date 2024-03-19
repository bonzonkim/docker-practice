# 1. node 설치
#FROM    ubuntu:22.04
#RUN     apt-get update
#RUN     DEBIAN_FRONTEND=noninteractive apt-get install -y curl
#RUN     curl -sL https://deb.nodesource.com/setup_16.x | bash -
#RUN     DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs
#
## 2. 소스 복사
## .위치에 있는 모든 파일을 ubuntu /usr/src/app에 복사를 한다.
#COPY    . /usr/src/app 
#
## 3. Nodejs 패키지 설치
## WORKDIR ==> cd
#WORKDIR /usr/src/app
#RUN     npm install
#
## 4. WEB 서버 실행 (Listen 포트 정의)
#EXPOSE 3000
#CMD    node server.js

# FROM ubuntu:22.04: 이 명령어는 기본 이미지로서 Ubuntu 22.04를 사용한다는 것을 의미합니다. 새로운 이미지를 만들 때 기본이 되는 이미지를 지정하는 명령어입니다.

# RUN apt-get update: 이 명령어는 우분투 패키지 관리자를 업데이트합니다. 패키지 관리자는 패키지 목록을 최신 상태로 유지하기 위해 주기적으로 업데이트해야 합니다.

# RUN DEBIAN_FRONTEND=noninteractive apt-get install -y curl: 이 명령어는 curl을 설치합니다.
# DEBIAN_FRONTEND=noninteractive는 대화형 프롬프트 대신에 비대화형(non-interactive) 모드로 설치를 수행하도록 설정합니다. -y 플래그는 설치 중에 나오는 확인 메시지에 자동으로 'yes'를 응답하도록 합니다.

# RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -: 이 명령어는 Node.js를 설치하기 위해 NodeSource에서 제공하는 스크립트를 사용하여 Node.js 16.x를 설치합니다.
# curl 명령어를 사용하여 NodeSource의 스크립트를 다운로드하고, bash를 사용하여 스크립트를 실행합니다. -s 플래그는 정적 파일을 다운로드할 때 진행 상황을 표시하지 않도록 합니다. -L 플래그는 서버가 리디렉션을 할 경우, 리디렉션을 따라가도록 합니다.

# RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs: 마지막으로 Node.js를 설치합니다. 
# 앞서 설치한 curl을 통해 추가한 NodeSource의 저장소를 통해 설치된 Node.js를 이제 패키지 관리자를 통해 설치합니다.

#1. node installation
# 누군가가 node를 설치해놓은 리눅스를 사용
#FROM node:12
#
## 2. copy the sources.
#COPY . /usr/src/app
#
## 3. nodejs package installation
#WORKDIR /usr/src/app
#RUN npm install
#
## 4. run the server
#EXPOSE 3000
#CMD node server.js

################# npm install 먼저

#FROM node:12
#
#COPY ./package* /usr/src/app/
#WORKDIR /usr/src/app
#RUN npm install
#
#COPY . /usr/src/app
#
#WORKDIR /usr/src/app
#
#EXPOSE 3000
#CMD node server.js


# 1. node 이미지 사용
FROM    node:16-alpine

# 2. 패키지 우선 복사
COPY    ./package* /usr/src/app/
WORKDIR /usr/src/app
RUN     npm install

# 3. 소스 복사
COPY . /usr/src/app

# 4. WEB 서버 실행 (Listen 포트 정의)
EXPOSE 3000
CMD    node server.js
