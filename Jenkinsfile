pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile.prod'
    }
    
  }
  stages {
    stage('build') {
      agent {
        dockerfile {
          filename 'Dockerfile.prod'
        }
        
      }
      steps {
        sh 'npm install'
      }
    }
  }
}