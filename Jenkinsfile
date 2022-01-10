pipeline {

 environment {
     dockerImage = ""
          image_name=""
          name="web-main"
          portno="4200"
          targetport="11000"

  }
    agent any

    tools {
        maven 'maven'
    }


    stages {
        stage('Check out') {
            steps {
//                 sh 'echo hello internal deploy'
//                 sh 'pwd'
//                  sh 'docker ps -a'
//                             sh 'echo hello internal deploy'
                      echo 'deploy webserver'
                      bat 'cd ,'
                      bat 'docker ps -a'

            }
        }

         stage('DOCKER TIME'){
            steps{
                script {
                   image_name="localhost:5000/rowanf/webmain"
                   dockerImage =  docker.build (image_name)
                    bat 'cd ,'
                     dockerImage.push()

                }
            }
        }




                   stage('Deploy') {
                        steps {
                           echo "ALL IS DONE"
                             script {
//                                sh 'docker rm -f webmain'
  //                              sh """docker run -d --restart=unless-stopped --name webmain  -p 11000:4200 localhost:5000/rowanf/webmain"""

                                bat 'docker rm -f webmain'
                                bat """docker run -d --restart=unless-stopped --name webmain  -p 11000:4200 localhost:5000/rowanf/webmain"""

                            }
                        }
                   }
                }






}




