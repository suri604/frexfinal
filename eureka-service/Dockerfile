FROM openjdk:11
WORKDIR eureka-service/src
ADD ./target/eureka-service-streak1.jar eureka-service.jar
EXPOSE 8761
ENTRYPOINT ["java","-jar","eureka-service.jar"]
