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
            }
        }

         stage('DOCKER TIME'){
            steps{
                script {
                   image_name="localhost:5000 rowanf/webmain"
                   dockerImage =  docker.build image_name
                    sh 'pwd'
                }
            }
        }

        stage('DEPLOY '){
            steps{
                script {
                    docker.withRegistry() {
                        dockerImage.push()
                    }

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




