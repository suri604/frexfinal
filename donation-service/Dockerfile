FROM openjdk:11
WORKDIR donation-service/src
ADD ./target/donation-service-streak1.jar donation-service.jar
EXPOSE 8090
ENTRYPOINT ["java","-jar","donation-service.jar"]
