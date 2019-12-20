FROM openjdk:11
WORKDIR environment-service/src
ADD ./target/environment-service-streak1.jar environment-service.jar
EXPOSE 8091
ENTRYPOINT ["java","-jar","environment-service.jar"]
