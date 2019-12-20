FROM openjdk:11
WORKDIR zuul-service/src
ADD ./target/zuul-service-streak1.jar zuul-service.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar", "zuul-service.jar"]
