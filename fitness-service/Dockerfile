FROM openjdk:11
WORKDIR /fitness-service/src
ADD ./target/fitness-service-streak1.jar fitness-service.jar
EXPOSE 8089
ENTRYPOINT ["java","-jar","fitness-service.jar"]
