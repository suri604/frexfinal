FROM openjdk:11
WORKDIR UserProfile/src
ADD ./target/userprofile-service-streak1.jar userprofile-service.jar
EXPOSE 8093
ENTRYPOINT ["java","-jar","userprofile-service.jar"]
