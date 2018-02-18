pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.prod'
    }
    
  }
  stages {
    stage('build') {
      steps {
        sh 'docker build -t sandbox -f Dockerfile.prod .'
      }
    }
  }
}