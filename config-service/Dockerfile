FROM openjdk:11
WORKDIR config-service/src
ADD ./target/config-service-streak1.jar config-service.jar
EXPOSE 8888
ENTRYPOINT ["java","-jar","config-service.jar"]
