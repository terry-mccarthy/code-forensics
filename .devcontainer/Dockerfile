# https://github.com/adamtornhill/code-maat
FROM clojure:alpine
VOLUME /data
LABEL description="code-maat docker image."

ARG dest=/usr/src/code-maat

RUN mkdir -p $dest
WORKDIR $dest

RUN apk add --update git
ADD https://github.com/adamtornhill/code-maat/compare/master...HEAD /dev/null
RUN git clone https://github.com/adamtornhill/code-maat $dest

#COPY project.clj $dest
RUN lein deps
COPY . $dest
RUN mv "$(lein uberjar | sed -n 's/^Created \(.*standalone\.jar\)/\1/p')" app-standalone.jar

RUN apk add --update nodejs nodejs-npm
RUN npm install -g gulp

ENTRYPOINT ["java", "-jar", "app-standalone.jar"]
CMD []