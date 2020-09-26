pipeline {

 environment {
     dockerImage = ""
          image_name=""
          name="web_main"
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
                sh 'echo hello'
                sh 'pwd'
            }
        }

         stage('DOCKER TIME'){
            steps{
                script {
                   image_name="rowanf/webmain:$BUILD_NUMBER"
                   dockerImage =  docker.build image_name
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


        stage('Build') {
                    steps {
                        sh 'ssh -p 1600 root@192.168.0.10 date'
                         sh "ssh -p 1600 root@192.168.0.10 ansible-playbook -vvv /home/rowan/myplaybook.yaml -e \"name=${name}\"  -e \"image_name=${image_name}\" -e \"portno=${portno}\" -e \"targetport=${targetport}\"  "
                    }
               }


    }


}




