FROM openjdk:11
WORKDIR /verification-service/src
ADD ./target/verification-service-streak1.jar verification-service.jar
EXPOSE 8094
ENTRYPOINT ["java","-jar","verification-service.jar"]
