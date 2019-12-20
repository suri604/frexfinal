FROM openjdk:11
WORKDIR rewards-service/src
EXPOSE 8095
ADD target/rewards-service-streak1.jar rewards-service.jar
ENTRYPOINT ["java","-jar","rewards-service.jar"]
