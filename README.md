# gradle_angular_springboot_pack
Ref : https://blogs.perficient.com/2021/08/30/angular-and-spring-boot-as-a-single-application/ 
# Gradle settings
rootProject.name = 'spring_angular'
include  'ui'
# java gradle:
task deleteStaticFolder(type: Delete) {
	def dirName = "src/main/resources/static"
	file( dirName ).list().each{
		f ->
			delete "${dirName}/${f}"
	}
}
processResources.dependsOn('ui:build')

# ui gradle:
plugins {
  id "com.github.node-gradle.node" version "3.1.1"
}

version '0.0.1'

node {
  version = '16.13.1'
  npmVersion = '7.23.0'
  download = true
  workDir = file("${project.buildDir}/node")
  nodeModulesDir = file("${project.projectDir}")
}



task build(type: NpmTask) {
  args = ['run', 'build']
}

build.dependsOn(npm_install)
//ui:build will be run before the processResources

# build command
gradle clean build

#run jar
java -jar spring_angular-0.0.1-SNAPSHOT.jar	
# url to run 
http://localhost:8080/index.html