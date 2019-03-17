pipeline {
    agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }
  }
    environment {
        DOCKER_IMAGE_NAME = "shashmca/clientapp"
    }
    // tools {nodejs "node"}
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'team-3', url: 'https://github.com/XT-training/case-studies.git'
            }
        }
        stage('Build') {
             steps {
              dir('capstone/client') {
                sh 'npm install'
              }
            }
        }
        stage('Build Docker Image') {
            steps {
              dir('capstone/client') {
                script {
                    app = docker.build(DOCKER_IMAGE_NAME)
                }
              }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'Dockerhubcred') {
                        app.push("${env.BUILD_NUMBER}")
                        //app.push("latest")
                    }
                }
            }
        }
        stage('DeployToProduction') {
            steps {
                input 'Deploy to Production?'
                milestone(1)
                //implement Kubernetes deployment here
            }
        }
    }
}
