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
                   image_name="localhost:5000/rowanf/webmain"
                   dockerImage =  docker.build (image_name)
                    sh 'pwd'
                     dockerImage.push()

                }
            }
        }




                   stage('Deploy') {
                        steps {
                           echo "ALL IS DONE"
                             script {
                                sh 'docker rm -f webmain'
                                sh """docker run -d  --restart=unless-stopped --name webmain  -p 11000:4200 -e SPRING_DATASOURCE_URL=${env.dburl}   -e SPRING_DATASOURCE_USERNAME=postgres   -e SPRING_DATASOURCE_PASSWORD=${MY_CREDS_PSW} -e SPRING_MAIL_USERNAME=${env.gmail}  -e SPRING_MAIL_PASSWORD=${MY_CREDS_PSW}  localhost:5000/rowanf/webmain"""

                            }
                        }
                   }
                }



    }


}




