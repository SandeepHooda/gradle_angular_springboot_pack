# gradle_angular_springboot_pack
Ref : https://blogs.perficient.com/2021/08/30/angular-and-spring-boot-as-a-single-application/ 
# Gradle settings
rootProject.name = 'spring_angular' <br/>
include  'ui'
# java gradle:
task deleteStaticFolder(type: Delete) {  <br/>
	def dirName = "src/main/resources/static"  <br/>
	file( dirName ).list().each{  <br/>
		f -> <br/>
			delete "${dirName}/${f}"  <br/>
	} <br/>
} <br/>
processResources.dependsOn('ui:build') <br/>
# angular.json
"outputPath": "../src/main/resources/static",
# ui gradle:
plugins { <br/>
  id "com.github.node-gradle.node" version "3.1.1" <br/>
} <br/>

version '0.0.1' <br/>

node {<br/> 
  version = '16.13.1' <br/>
  npmVersion = '7.23.0' <br/>
  download = true <br/>
  workDir = file("${project.buildDir}/node") <br/>
  nodeModulesDir = file("${project.projectDir}") <br/>
} <br/>



task build(type: NpmTask) { <br/>
  args = ['run', 'build'] <br/>
} <br/>

build.dependsOn(npm_install) <br/>
//ui:build will be run before the processResources <br/>

# build command
gradle clean build

#run jar
java -jar spring_angular-0.0.1-SNAPSHOT.jar	
# url to run 
http://localhost:8080/index.html