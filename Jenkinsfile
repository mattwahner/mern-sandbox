pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.prod'
    }
    
  }
  stages {
    stage('build') {
      agent any
      steps {
        sh 'npm install'
      }
    }
  }
}