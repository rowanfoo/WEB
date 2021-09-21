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
                sh 'echo hello internal deploy'
                sh 'pwd'
                 sh 'docker ps -a'
            }
        }

         stage('DOCKER TIME'){
            steps{
                script {
                   image_name="localhost:5000 rowanf/webmain"
                   dockerImage =  docker.build image_name
                    sh 'pwd'
                     dockerImage.push()

                }
            }
        }

        stage('DEPLOY '){
            steps{
                script {
                     dockerImage.push()
                }
            }
        }


        stage('Build') {
                    steps {
                      sh 'All work done '
                    }
               }


    }


}




