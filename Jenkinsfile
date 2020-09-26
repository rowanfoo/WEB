pipeline {

 environment {
     dockerImage = ""
  }
    agent any

    tools {
        maven 'maven'
    }


    stages {
        stage('Check out') {
            steps {
                sh 'echo hello'
                sh 'pwd'
            }
        }

         stage('DOCKER TIME'){
            steps{
                script {
                   dockerImage =  docker.build "rowanf/webmain:$BUILD_NUMBER"
                    sh 'pwd'
                }
            }
        }

        stage('DEPLOY '){
            steps{
                script {
                    docker.withRegistry( '', "mydocker-cred" ) {
                        dockerImage.push()
                    }
                }
            }
        }
    }


}




